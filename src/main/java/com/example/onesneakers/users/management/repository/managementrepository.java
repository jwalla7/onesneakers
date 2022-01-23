package com.example.onesneakers.users.management.repository;

import com.example.onesneakers.users.management.entity.managemententity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface managementrepository extends JpaRepository<managemententity, Integer> {
    Optional<managemententity> findByEmail(String email);
//    Optional<managemententity> findByUsername(String username);
}
