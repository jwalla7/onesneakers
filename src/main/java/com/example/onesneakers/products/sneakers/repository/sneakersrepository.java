package com.example.onesneakers.products.sneakers.repository;

import com.example.onesneakers.products.sneakers.entity.sneakersentity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface sneakersrepository extends CrudRepository<sneakersentity, Integer> {

    // Query Methods
    List<sneakersentity> findByBrandName(String brandName);

    List<sneakersentity> findByBrandNameAndSneakerName(String brandName, String sneakerName);

    List<sneakersentity> findByPrice(int price);

    List<sneakersentity> findByPriceLessThan(int price);
}
