package com.example.onesneakers.users.customers.repository;

import com.example.onesneakers.users.customers.entity.customerentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface customerrepository extends JpaRepository<customerentity, Integer> {
    Optional<customerentity> findByEmail(String email);
}
