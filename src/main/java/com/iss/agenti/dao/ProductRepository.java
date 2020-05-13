package com.iss.agenti.dao;

import com.iss.agenti.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    boolean existsByName(String name);

}
