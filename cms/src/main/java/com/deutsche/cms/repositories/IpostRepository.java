package com.deutsche.cms.repositories;

import com.deutsche.cms.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface IpostRepository extends JpaRepository<Post, Integer> {

    public List<Post> findAllByStatus(String status);
    public List<Post> findAllByPostId(int postId);

    @Query(value = "Select * from Posts where status = ?1 and postId = ?2", nativeQuery = true)
    public List<Post> GetPublishedPost(String status, int postId);

}
