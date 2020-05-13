package com.iss.agenti.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "orderedproduct")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderedProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int orderid;
    private int productid;
    private int quantity;

    public OrderedProduct(int orderid, int productid, int quantity){
        this.orderid = orderid;
        this.productid =productid;
        this.quantity = quantity;
    }

}
