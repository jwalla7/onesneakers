package com.example.onesneakers.products.sneakers.controller;

import com.example.onesneakers.products.sneakers.entity.sneakersentity;
import com.example.onesneakers.products.sneakers.repository.sneakersrepository;
import com.example.onesneakers.products.sneakers.service.sneakersservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

    @RestController
    public class sneakerscontroller {

        @Autowired
        public sneakersrepository sneakersrepository;

        @Autowired
        private sneakersservice sneakerService;

        //  Get All Sneakers
        @GetMapping("/sneakers")
        public ResponseEntity<List<sneakersentity>> getSneakers() {
            return new ResponseEntity<>(sneakerService.getSneakers(), HttpStatus.OK);
        }

        //  Get Sneakers by Brand
        @GetMapping("/sneakers/brand")
        public ResponseEntity<List<sneakersentity>> findByBrandName(@RequestParam("brand") String brandName) {
            return new ResponseEntity<>(sneakersrepository.findByBrandName(brandName), HttpStatus.OK);
        }

        //  Get Sneakers by Price
        @GetMapping("/sneakers/listing-price")
        public ResponseEntity<List<sneakersentity>> findByPrice(@RequestParam ("listing-price") int price) {
            return new ResponseEntity<>(sneakersrepository.findByPrice(price), HttpStatus.OK);
        }

        // Get Sneaker by Id
        @GetMapping("/sneakers/{id}")
        public ResponseEntity<sneakersentity> getSneaker(@PathVariable int id) {
            return new ResponseEntity<>(sneakerService.getSneaker(id), HttpStatus.OK);
        }

        //  Get Sneaker by Brand then Name
        @GetMapping("/sneakers/brandandname")
        public ResponseEntity<List<sneakersentity>> findByBrandNameAndSneakerName(@RequestParam ("brand") String brandName,
                                                                                  @RequestParam ("name") String sneakerName) {
            return new ResponseEntity<> (sneakersrepository.findByBrandNameAndSneakerName(brandName, sneakerName), HttpStatus.OK);
        }
        //  POST Create Sneaker
        @PostMapping("/admin/manager/products")
        public ResponseEntity<sneakersentity> saveSneaker (@Valid @RequestBody sneakersentity sneaker) {
            return new ResponseEntity<>(sneakerService.saveSneaker(sneaker), HttpStatus.CREATED);
        }

        //  PUT - Update Sneaker by Id
        @PutMapping("/admin/manager/products/{id}")
        public ResponseEntity<sneakersentity> updateSneaker(@PathVariable int id, @Valid @RequestBody sneakersentity sneaker) {
            sneaker.setSneakerId(id);
            return new ResponseEntity<>(sneakerService.updateSneaker(sneaker), HttpStatus.OK);
        }

        //  DELETE - Delete Sneaker by Id
        @DeleteMapping("/sneakers")
        public void deleteSneaker(@RequestParam int id) {
            sneakerService.deleteSneaker(id);
        }

    }
