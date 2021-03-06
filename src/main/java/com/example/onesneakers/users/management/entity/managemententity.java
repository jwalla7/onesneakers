package com.example.onesneakers.users.management.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
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
@AllArgsConstructor
@Table(name = "MANAGERS")
public class managemententity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //      @Column Annotation not required if database column name is identical to variable/field name
    @Column(name = "MANAGER_ID")
    private int managerId;

    //      @NotBlank checks @NotNull and @NotEmpty
    @NotBlank(message = "Name is required")
    @Column(name = "FULL_NAME")
    private String fullName;

    @Email(message = "Valid email is required")
    @Column(name = "EMAIL", unique = true)
    private String email;

    @NotBlank(message = "Username is required")
    @Column(name = "USERNAME", unique = true)
    private String username;

//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnore
    @NotBlank(message = "Password is required")
    @Column(name = "PASSWORD")
    private String password;

    @CreationTimestamp
    @Column(name = "CREATED_AT", insertable = false, nullable = true, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT")
    private Date updatedAt;

}
