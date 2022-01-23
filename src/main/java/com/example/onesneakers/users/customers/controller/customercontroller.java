package com.example.onesneakers.users.customers.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer/account")
public class customercontroller {

    @GetMapping("/login")
    public String login() {
        return "You are on the home page";
    }

    //    Customer account dashboard
    @GetMapping("/myaccount")
    public String myaccount() {
        return "You are seeing the myaccount contents";
    }
}
