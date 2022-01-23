package com.example.onesneakers.users.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/manager")
public class managementsecuritycontroller {

    @GetMapping("/login")
    public String managerlogin() {
        return "Manager main";
    }

    @GetMapping("/myaccess")
    public String manageraccount() {
        return "Manager access content";
    }

}
