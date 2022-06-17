//package com.example.onesneakers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.core.env.Environment;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//
//import javax.sql.DataSource;
//
//@Configuration
//@PropertySource({ "classpath:application.properties" })
//public class datasource {
//
//    @Autowired
//    private Environment env;
//
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName(env.getProperty("com.mysql.cj.jdbc.Driver"));
//        dataSource.setUrl(env.getProperty(""));
//        dataSource.setUsername(env.getProperty(""));
//        dataSource.setPassword(env.getProperty(""));
//        return dataSource;
//    }
//}

