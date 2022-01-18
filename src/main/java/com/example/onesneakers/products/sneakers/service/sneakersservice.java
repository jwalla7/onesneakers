package com.example.onesneakers.products.sneakers.service;

import com.example.onesneakers.products.sneakers.entity.sneakersentity;

import java.util.List;

public interface sneakersservice {

    List<sneakersentity> getSneakers();

    sneakersentity getSneaker(int id);

    sneakersentity saveSneaker(sneakersentity sneakers);

    sneakersentity updateSneaker(sneakersentity sneakers);

    void deleteSneaker(int id);
}
