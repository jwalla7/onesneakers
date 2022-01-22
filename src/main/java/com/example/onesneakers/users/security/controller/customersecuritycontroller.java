package com.example.onesneakers.users.security.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// customer/account/login/
// customer/account/login/myaccount/
@RequestMapping("/customer/account/")
public class customersecuritycontroller {

//    @Autowired private customerrepository usecustomerrepository;

    @GetMapping("/login")
    public String login() {
        return "You are on the home page";
    }

    //    Customer account dashboard
    @GetMapping("/myaccount")
    public String myaccount() {
        return "You are seeing the myaccount contents";
    }





//    @GetMapping
//    public customerentity getCustomerDetails() {
//        String email = (String)
//                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        return usecustomerrepository.findByEmail(email).get();
//    }


}
