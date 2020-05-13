package com.iss.agenti.model.Requests;

import com.iss.agenti.model.BoughtProduct;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class AddOrderRequest {
    private String username;
    private List<BoughtProduct> products;
}
