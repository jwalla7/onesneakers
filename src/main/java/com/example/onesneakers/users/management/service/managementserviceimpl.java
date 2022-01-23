package com.example.onesneakers.users.management.service;

import com.example.onesneakers.users.management.entity.managemententity;
import com.example.onesneakers.users.management.repository.managementrepository;
import com.example.onesneakers.users.security.model.managementmodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class managementserviceimpl implements managementservice {

    @Autowired
    private managementrepository usemanagementrepository;

    @Override
    public Iterable<managemententity> getManagers() {
        return usemanagementrepository.findAll();
    }

    @Override
    public managemententity getManager(int id) {
        Optional<managemententity> management = usemanagementrepository.findById(id);
        if (management.isPresent()) {
            return management.get();
        }
        throw new RuntimeException("Manager is not found for the id " + id);
    }

    @Override
    public managemententity saveManager(managemententity management) {
        return usemanagementrepository.save(management);
    }

    public managemententity updateManager(managemententity management) {
        return usemanagementrepository.save(management);
    }

    @Override
    public void deleteManager(int id) {
        usemanagementrepository.deleteById(id);
    }

}
