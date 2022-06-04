package com.deutsche.cms.controller;

import com.deutsche.cms.entities.Post;
import com.deutsche.cms.entities.PostHistory;
import com.deutsche.cms.repositories.IPostHistoryRepository;
import com.deutsche.cms.repositories.IpostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/post")
public class PostController {


    @Autowired
    IpostRepository postRepository;
    @Autowired
    IPostHistoryRepository postHistoryRepository;

    @CrossOrigin
    @GetMapping("")
    public List<Post> GetAll() {
        return postRepository.findAllByStatus("Published");
    }

    @CrossOrigin
    @GetMapping("/history/{id}")
    public List<PostHistory> GetAllHistory(@PathVariable(value = "id") Integer id) {
        return postHistoryRepository.findAllByPostId(id);
    }


    @CrossOrigin
    @GetMapping("/PendingForApproval")
    public List<Post> GetAllPendingForApproval() {
        return postRepository.findAllByStatus("Under Review");
    }

    @CrossOrigin
    @PostMapping("/ApprovePost/{id}")
    public Boolean ApprovePost(@PathVariable(value = "id") Integer id) {
        Post post = (postRepository.findById(id)).get();

        Post publishedPost;
        if(post.getPostId() > 0) {
            publishedPost = (postRepository.findById(post.getPostId())).get();
            PushPostToHistory(publishedPost);
            postRepository.deleteById(post.getPostId());
        }

        post.setStatus("Published");
        postRepository.save(post);

        return true;
    }

    private void PushPostToHistory(Post publishedPost) {
        PostHistory history = new PostHistory();

        history.setAuthor(publishedPost.getAuthor());
        history.setTitle(publishedPost.getTitle());
        history.setPostContent(publishedPost.getPostContent());
        history.setCreatedOn(publishedPost.getCreatedOn());
        history.setPostId(publishedPost.getId());

        postHistoryRepository.save(history);
    }

    @CrossOrigin
    @PostMapping("/RejectPost/{id}")
    public boolean RejectPost(@PathVariable(value = "id") Integer id) {
        postRepository.deleteById(id);
        return true;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Post> Get(@PathVariable(value = "id") Integer id) {
        return postRepository.findById(id);
    }

    @CrossOrigin
    @PostMapping("")
    public Post Save(@RequestBody Post post) {
        post.setCreatedOn(LocalDateTime.now());


        if(post.getPostId()==0) {
            post.setPostId(post.getId());
            post.setId(0);
            post.setStatus("Under Review");
            return postRepository.save(post);
        }else{

            if(post.getStatus().equals("Published")) {
                post.setId(0);
                post.setStatus("Under Review");
            }


//

            return postRepository.save(post);
        }

    }

    @CrossOrigin
    @PostMapping("/{id}")
    public boolean Approve(@PathVariable(value = "id") Integer id){
        return true;
    }

}
