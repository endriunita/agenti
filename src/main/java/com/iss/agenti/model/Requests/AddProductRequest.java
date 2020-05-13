package com.iss.agenti.model.Requests;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class AddProductRequest {

    private String name;
    private int price;
    private int quantity;
}
