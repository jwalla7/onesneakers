package com.example.onesneakers.products.sneakers.service;

import com.example.onesneakers.products.sneakers.entity.sneakersentity;
import com.example.onesneakers.products.sneakers.repository.sneakersrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class sneakersserviceimpl implements sneakersservice {

    @Autowired
    private sneakersrepository sneakersrepository;

    @Override
    public List<sneakersentity> getSneakers() {
        return (List<sneakersentity>) sneakersrepository.findAll();
    }

    @Override
    public sneakersentity getSneaker(int id) {
        Optional<sneakersentity> sneakers = sneakersrepository.findById(id);
        if (sneakers.isPresent()) {
            return sneakers.get();
        }

        throw new RuntimeException("Sneaker is not available " + id);
    }

    @Override
    public sneakersentity saveSneaker(sneakersentity sneaker) {
        return sneakersrepository.save(sneaker);
    }

    public sneakersentity updateSneaker(sneakersentity sneaker) {
        return sneakersrepository.save(sneaker);
    }

    @Override
    public void deleteSneaker(int id) {
        sneakersrepository.deleteById(id);
    }

}
