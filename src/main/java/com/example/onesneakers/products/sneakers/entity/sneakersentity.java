package com.example.onesneakers.products.sneakers.entity;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "SNEAKERS")
public class sneakersentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SNEAKER_ID")
    private int sneakerId;

    @NotBlank(message = "Brand name is required")
    @Column(name = "BRAND_NAME")
    private String brandName;

    @NotBlank(message = "Sneaker name is required")
    @Column(name = "SNEAKER_NAME")
    private String sneakerName;

    @Min(value = 1, message = "Price is required")
    @Column(name = "PRICE")
    private int price;

    @URL(message = "Image is required")
    @Column(name = "IMAGE")
    private String image;

    @Min( value = 1, message = "Total inventory is required")
    @Column(name = "AVAILABLE_STOCK")
    private int availableStock;

    @CreationTimestamp
    @Column(name = "CREATED_AT", insertable = false, nullable = true, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT")
    private Date updatedAt;

    public int getSneakerId() {
        return sneakerId;
    }

    public void setSneakerId(int productId) {
        this.sneakerId = productId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getSneakerName() {
        return sneakerName;
    }

    public void setSneakerName(String sneakerName) {
        this.sneakerName = sneakerName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getAvailableStock() {
        return availableStock;
    }

    public void setAvailableStock(int availableStock) {
        this.availableStock = availableStock;
    }

    @Override
    public String toString() {
        return "Sneakers{" +
                "sneakerId=" + sneakerId +
                ", brandName='" + brandName + '\'' +
                ", sneakerName='" + sneakerName + '\'' +
                ", price=" + price +
                ", image='" + image + '\'' +
                ", availableStock=" + availableStock +
                '}';
    }
}
