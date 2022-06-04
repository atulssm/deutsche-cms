package com.deutsche.cms.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {

    public LoginResponse(boolean isSuccess, String role, String name){
        this.setRole(role);
        this.setSuccess(isSuccess);
        this.setName(name);
    }
    private boolean isSuccess;
    private String role;
    private String name;
}
