package com.deutsche.cms.repositories;

import com.deutsche.cms.entities.Post;
import com.deutsche.cms.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository  extends JpaRepository<User, Integer> {

    public User findByUsernameAndPassword(String username, String password);


}
