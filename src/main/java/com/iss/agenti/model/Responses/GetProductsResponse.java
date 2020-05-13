package com.iss.agenti.model.Responses;

import com.iss.agenti.model.Product;
import org.json.simple.JSONArray;

import java.util.List;

public class GetProductsResponse {
    private List<Product> products;

    public GetProductsResponse() {}

    public GetProductsResponse(List<Product> array){
        this.products = array;
    }

    public List<Product> getProducts(){
        return this.products;
    }

    public void setProducts(List<Product> products){
        this.products = products;
    }
}
