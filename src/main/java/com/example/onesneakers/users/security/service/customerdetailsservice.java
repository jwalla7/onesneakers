package com.example.onesneakers.users.security.service;

import com.example.onesneakers.users.customers.entity.customerentity;
import com.example.onesneakers.users.customers.repository.customerrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class customerdetailsservice implements UserDetailsService {

    @Autowired
    private customerrepository usecustomerrepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        customerentity customerentity = usecustomerrepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Customer not found"));
        return new org.springframework.security.core.userdetails.User(customerentity.getEmail(), customerentity.getPassword(), new ArrayList<>());
    }
}
