package com.example.onesneakers.users.management.service;

import com.example.onesneakers.users.management.entity.managemententity;

public interface managementservice {

    Iterable<managemententity> getManagers();

    managemententity getManager(int id);

    managemententity saveManager(managemententity management);

    managemententity updateManager(managemententity management);

    void deleteManager(int id);
}
