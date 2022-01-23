package com.example.onesneakers.users.management.controller;

import com.example.onesneakers.users.management.entity.managemententity;
import com.example.onesneakers.users.management.service.managementservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin/manager")
public class managementcontroller {

    @Autowired private managementservice managerService;
    @Autowired private PasswordEncoder usepasswordencoder;

    @GetMapping("/data")
    public ResponseEntity<List<managemententity>> getManagers() {
        return new ResponseEntity<List<managemententity>>((List<managemententity>) managerService.getManagers(), HttpStatus.OK);
    }

    @GetMapping("/myaccess/{id}")
    public ResponseEntity<managemententity> getManager(@PathVariable int id) {
        return new ResponseEntity<>(managerService.getManager(id), HttpStatus.OK);
    }

    @PostMapping("/login/register")
//    @Valid, validates post data from user before if binds to Management object
    public ResponseEntity<managemententity> saveManager (@Valid @RequestBody managemententity manager) {
        managemententity newManager = new managemententity();
        newManager.setEmail(manager.getEmail());
        newManager.setUsername(manager.getUsername());
        newManager.setPassword(usepasswordencoder.encode(manager.getPassword()));
        return new ResponseEntity<>(managerService.saveManager(manager), HttpStatus.CREATED);
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
