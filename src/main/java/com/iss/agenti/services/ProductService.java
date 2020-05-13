package com.iss.agenti.services;

import com.iss.agenti.dao.ProductRepository;
import com.iss.agenti.model.BoughtProduct;
import com.iss.agenti.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public void addProduct(String name, int price, int quantity){
        this.productRepository.save(new Product(name, price, quantity));
    }

    public List<Product> getAllProducts(){
        return this.productRepository.findAll();
    }

    public boolean exists(String name){
        return this.productRepository.existsByName(name);
    }

    public boolean verifyStoc(BoughtProduct item){
        return this.productRepository.getOne(item.getId()).getQuantity() < item.getQuantity();
    }

    public void scadeStoc(BoughtProduct item){
        Product bingbong = this.productRepository.getOne(item.getId());
        System.out.println("Got item with id: " + bingbong.getId());
        bingbong.setQuantity(bingbong.getQuantity() - item.getQuantity());
        this.productRepository.save(bingbong);
//        this.productRepository.deleteById(bingbong.getId());
//        this.productRepository.save(new Product(bingbong.getId(), bingbong.getName(), bingbong.getPrice(),bingbong.getQuantity()));
    }

}
