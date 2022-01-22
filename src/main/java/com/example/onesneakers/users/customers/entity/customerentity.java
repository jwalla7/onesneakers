package com.example.onesneakers.users.customers.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "CUSTOMERS")
public class customerentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Column(name = "FULL_NAME")
    private String fullName;

    @Email(message = "Valid email is required")
    @Column(name = "EMAIL")
    private String email;

    @NotBlank(message = "Username is required")
    @Column(name = "USERNAME")
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotBlank(message = "Password is required")
    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "SHIPPING_ADDRESS")
    private String shippingAddress;
    @Column(name = "SHIPPING_CITY")
    private String shippingCity;
    @Column(name = "SHIPPING_ZIPCODE")
    private int shippingZipCode;
    @Column(name = "SHIPPING_STATE")
    private String shippingState;

    @Column(name = "BILLING_ADDRESS")
    private String billingAddress;
    @Column(name = "BILLING_CITY")
    private String billingCity;
    @Column(name = "BILLING_ZIPCODE")
    private int billingZipCode;
    @Column(name = "BILLING_STATE")
    private String billingState;

    @Column(name = "CREDIT_CARD_NUMBER")
    private int creditCardNumber;
    @Column(name = "EXPIRATION_DATE")
    private Date expirationDate;
    @Column(name = "CVC")
    private int cvc;

    @CreationTimestamp
    @Column(name = "CREATED_AT", insertable = false, nullable = true, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT")
    private Date updatedAt;

}
