package com.example.onesneakers.users.customers.service;

import com.example.onesneakers.users.customers.entity.customerentity;
import com.example.onesneakers.users.customers.repository.customerrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class customerserviceimpl implements customerservice {

    @Autowired
    private customerrepository usecustomerrepository;

    @Override
    public List<customerentity> getCustomers() {
        return usecustomerrepository.findAll();
    }

    @Override
    public customerentity getCustomer(int id) {
        Optional<customerentity> customer = usecustomerrepository.findById(id);
        if (customer.isPresent()) {
            return customer.get();
        }
        throw new RuntimeException("Customer is not found for the id " + id);
    }

    @Override
    public customerentity saveCustomer(customerentity customer) {
        return usecustomerrepository.save(customer);
    }

    public customerentity updateCustomer(customerentity customer) {
        return usecustomerrepository.save(customer);
    }

    @Override
    public void deleteCustomer(int id) {
        usecustomerrepository.deleteById(id);
    }
}
