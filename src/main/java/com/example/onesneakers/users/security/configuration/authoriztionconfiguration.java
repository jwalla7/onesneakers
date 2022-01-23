package com.example.onesneakers.users.security.configuration;

import com.example.onesneakers.users.security.service.customerdetailsservice;
import com.example.onesneakers.users.security.service.managmentdetailsservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
//@EnableWebSecurity
public class authoriztionconfiguration extends WebSecurityConfigurerAdapter {


    @Autowired private customerdetailsservice customerdetailsservice;
    @Autowired private managmentdetailsservice managementdetailsservice;



//        @Override
//        protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                .httpBasic().disable()
//                .cors()
//                .and()
//                .authorizeHttpRequests()
//                .antMatchers("/customer/account/login/auth/**").permitAll()
//                .antMatchers("/customer/account/login/myaccount").authenticated()
//                .antMatchers("/customer/account/login/myaccount/**").hasRole("USER")
//                .and()
//                .formLogin()
//                .and()
//                .customerDetailsService(uds)
//                .exceptionHandling()
//                .authenticationEntryPoint((request, response, authException) -> response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized")
//                )
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/admin/manager/login/**").permitAll()
                .antMatchers("/customer/account/login/**").permitAll()
                .antMatchers("/admin/manager/myaccess/**").authenticated()
                .antMatchers("/customer/account/myaccount/**").authenticated()
                .and()
                .formLogin()
                .and()
                .httpBasic();
    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//                .withUser("jamal").password("123").authorities("admin")
//                .and()
//                .withUser("lisa").password("123").authorities("user")
//                .and()
//                .passwordEncoder(NoOpPasswordEncoder.getInstance());
//    }


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(customerdetailsservice).passwordEncoder(passwordEncoder());
        auth.userDetailsService(managementdetailsservice).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
