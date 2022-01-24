package com.example.onesneakers.users.customers.service;

import com.example.onesneakers.users.customers.entity.customerentity;

import java.util.List;

public interface customerservice {

    List<customerentity> getCustomers();

    customerentity getCustomer(int id);

    customerentity saveCustomer(customerentity customer);

    customerentity updateCustomer(customerentity customer);

    void deleteCustomer(int id);
}
