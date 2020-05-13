package com.iss.agenti.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class BoughtProduct {
    private int id;
    private String name;
    private int quantity;
}
