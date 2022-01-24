package com.example.onesneakers.users.customers.service;

import com.example.onesneakers.users.customers.entity.customerentity;


public interface customerservice {

    Iterable<customerentity> getCustomers();

    customerentity getCustomer(int id);

    customerentity saveCustomer(customerentity customer);

    customerentity updateCustomer(customerentity customer);

    void deleteCustomer(int id);
}
