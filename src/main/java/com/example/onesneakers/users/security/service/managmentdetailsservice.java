package com.example.onesneakers.users.security.service;

import com.example.onesneakers.users.customers.entity.customerentity;
import com.example.onesneakers.users.management.entity.managemententity;
import com.example.onesneakers.users.management.repository.managementrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class managmentdetailsservice implements UserDetailsService {

    @Autowired
    private managementrepository usemanagementrepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        managemententity managemententity = usemanagementrepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Manager not found"));
        return new org.springframework.security.core.userdetails.User(managemententity.getEmail(), managemententity.getPassword(), new ArrayList<>());
    }
}
