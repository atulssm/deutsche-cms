package com.deutsche.cms.controller;

import com.deutsche.cms.entities.LoginResponse;
import com.deutsche.cms.entities.User;
import com.deutsche.cms.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/login")
public class LoginController {

    @Autowired
    IUserRepository userRepository;

    @CrossOrigin
    @PostMapping("")
    public LoginResponse Login(@RequestBody User user){
            User userDetail = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
            if(userDetail == null){
                return new LoginResponse(false,"", "");
            }else{
                return new LoginResponse(true, userDetail.getRole( ), userDetail.getName());
            }
    }
}
