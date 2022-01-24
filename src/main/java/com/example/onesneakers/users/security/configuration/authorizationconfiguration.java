package com.example.onesneakers.users.security.configuration;

import com.example.onesneakers.users.security.service.customerdetailsservice;
import com.example.onesneakers.users.security.service.managmentdetailsservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
public class authorizationconfiguration extends WebSecurityConfigurerAdapter {


    @Autowired private customerdetailsservice customerdetailsservice;
    @Autowired private managmentdetailsservice managementdetailsservice;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(
                        "/sneakers/**",
                        "/justdropped/**",
                        "/culture/**",
                        "/about/**",
                        "/admin/manager/data",
                        "/admin/manager/login/**",
                        "/admin/manager/register/**",
                        "/customer/account/login/**",
                        "/customer/account/register/**"
                ).permitAll()
                .antMatchers(
                "/admin/manager/myaccess/**",
                        "/customer/account/myaccount/**"
                ).authenticated()
//                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(managementdetailsservice).passwordEncoder(passwordEncoder());
        auth.userDetailsService(customerdetailsservice).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
