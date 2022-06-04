package com.deutsche.cms.repositories;

import com.deutsche.cms.entities.Post;
import com.deutsche.cms.entities.PostHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPostHistoryRepository extends JpaRepository<PostHistory, Integer> {

    public List<PostHistory> findAllByPostId(int postId);
}
