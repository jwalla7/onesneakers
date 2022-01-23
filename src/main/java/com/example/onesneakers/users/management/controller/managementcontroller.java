package com.example.onesneakers.users.management.controller;

import com.example.onesneakers.users.management.entity.managemententity;
import com.example.onesneakers.users.management.repository.managementrepository;
import com.example.onesneakers.users.management.service.managementservice;
import com.example.onesneakers.users.security.model.managementmodel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin/manager")
public class managementcontroller {

    @Autowired private managementservice managerService;
    @Autowired private managementrepository usemanagementrepository;
    @Autowired private PasswordEncoder usepasswordencoder;

    @GetMapping("/login")
    public String managerlogin() {
        return "Manager main content, permit all";
    }

    @GetMapping("/myaccess")
    public String manageraccount() {
        return "Manager access content, authentication only";
    }

    @GetMapping("/data")
    public ResponseEntity<List<managemententity>> getManagers() {
        return new ResponseEntity<List<managemententity>>((List<managemententity>) managerService.getManagers(), HttpStatus.OK);
    }

    @GetMapping("/myaccess/{id}")
    public ResponseEntity<managemententity> getManager(@PathVariable int id) {
        return new ResponseEntity<>(managerService.getManager(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public managemententity createManager (@Valid @RequestBody managementmodel managementmodel) {
        managemententity newManager = new managemententity();
        newManager.setFullName(managementmodel.getFullName());
        newManager.setUsername(managementmodel.getUsername());
        newManager.setEmail(managementmodel.getEmail());
        newManager.setPassword(usepasswordencoder.encode(managementmodel.getPassword()));
        return usemanagementrepository.save(newManager);
    }

    @PutMapping("/myaccess/{id}")
    public ResponseEntity<managemententity> updateManager(@PathVariable int id, @Valid @RequestBody managemententity manager) {
        manager.setManagerId(id);
        return new ResponseEntity<>(managerService.updateManager(manager), HttpStatus.OK);
    }

    @DeleteMapping("/myaccess")
    public void deleteManager(@RequestParam int id) {
        managerService.deleteManager(id);
    }

}
