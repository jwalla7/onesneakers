package com.example.onesneakers.users.security.model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class customermodel {

    @NotBlank
    private String fullName;

    @Email
    private String email;

    @NotBlank
    private String username;

    @NotBlank
    private String password;

}
