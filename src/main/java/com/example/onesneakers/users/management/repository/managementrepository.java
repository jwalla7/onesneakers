package com.example.onesneakers.users.management.repository;

import com.example.onesneakers.users.management.entity.managemententity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface managementrepository extends CrudRepository<managemententity, Integer> {

}
