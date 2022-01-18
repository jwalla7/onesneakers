package com.example.onesneakers.users.management.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "MANAGERS")
public class managemententity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //      @Column Annotation not required if database column name is identical to variable/field name
    @Column(name = "MANAGER_ID")
    private int managerId;

    //      @NotBlank checks @NotNull and @NotEmpty
    @NotBlank(message = "First name is required")
    @Column(name = "FIRST_NAME")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Column(name = "LAST_NAME")
    private String lastName;

    @Email(message = "Valid email is required")
    @Column(name = "EMAIL")
    private String email;

    @NotBlank(message = "Username is required")
    @Column(name = "USERNAME")
    private String username;

    @NotBlank(message = "Password is required")
    @Column(name = "PASSWORD")
    private String password;

    @CreationTimestamp
    @Column(name = "CREATED_AT", insertable = false, nullable = true, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT")
    private Date updatedAt;

    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Managers{" +
                "managerId=" + managerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
