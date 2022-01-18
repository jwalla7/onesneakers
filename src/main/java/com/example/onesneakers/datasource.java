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
//        dataSource.setUrl(env.getProperty("jdbc:mysql://localhost:3306/ONESneakers?useSSL=true"));
//        dataSource.setUsername(env.getProperty("root"));
//        dataSource.setPassword(env.getProperty("MACjrw20148!"));
//        return dataSource;
//    }
//}