package com.example.onesneakers.users.security.model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class managementmodel {

    @Email
    private String email;

    @NotBlank
    private String password;

}
