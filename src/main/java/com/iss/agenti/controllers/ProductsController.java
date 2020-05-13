package com.iss.agenti.controllers;


import com.iss.agenti.model.Product;
import com.iss.agenti.model.Requests.AddProductRequest;
import com.iss.agenti.model.Responses.GetProductsResponse;
import com.iss.agenti.services.ProductService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping("/products")
@RestController
public class ProductsController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public GetProductsResponse getProducts(){
        return new GetProductsResponse(this.productService.getAllProducts());
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<?> addProduct(@RequestBody AddProductRequest addProductRequest) throws Exception {
        if (this.productService.exists(addProductRequest.getName())){
            throw new Exception("Product already in list, try updating the stock");
        }
        else {
            this.productService.addProduct(addProductRequest.getName(), addProductRequest.getPrice(), addProductRequest.getQuantity());
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
    }

}
