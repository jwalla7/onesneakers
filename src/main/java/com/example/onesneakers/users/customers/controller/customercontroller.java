package com.example.onesneakers.users.customers.controller;

import com.example.onesneakers.users.customers.entity.customerentity;
import com.example.onesneakers.users.customers.repository.customerrepository;
import com.example.onesneakers.users.customers.service.customerservice;
import com.example.onesneakers.users.security.model.managementmodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/customer/account")
public class customercontroller {

    @Autowired private customerservice customerService;
    @Autowired private customerrepository usecustomerrepository;
    @Autowired private PasswordEncoder usepasswordencoder;

    @GetMapping("/login")
    public String customerlogin() {
        return "You are on the home page, permit all";
    }

    @GetMapping("/myaccount")
    public String customeraccount() {
        return "Customer access content, authentication only";
    }

    @GetMapping("/data")
    public ResponseEntity<List<customerentity>> getCustomers() {
        return new ResponseEntity<>((List<customerentity>) customerService.getCustomers(), HttpStatus.OK);
    }

    @GetMapping("/myaccount/{id}")
    public ResponseEntity<customerentity> getCustomer(@PathVariable int id) {
        return new ResponseEntity<>(customerService.getCustomer(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public customerentity createCustomer (@Valid @RequestBody managementmodel customermodel) {
        customerentity newCustomer = new customerentity();
        newCustomer.setFullName(customermodel.getFullName());
        newCustomer.setUsername(customermodel.getUsername());
        newCustomer.setEmail(customermodel.getEmail());
        newCustomer.setPassword(usepasswordencoder.encode(customermodel.getPassword()));
        return usecustomerrepository.save(newCustomer);
    }

    @PutMapping("/myaccount/{id}")
    public ResponseEntity<customerentity> updateCustomer(@PathVariable int id, @Valid @RequestBody customerentity customer) {
        customer.setCustomerId(id);
        return new ResponseEntity<>(customerService.updateCustomer(customer), HttpStatus.OK);
    }

    @DeleteMapping("/myaccount")
    public void deleteCustomer(@RequestParam int id) {
        customerService.deleteCustomer(id);
    }
}

