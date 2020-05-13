package com.iss.agenti.controllers;


import com.iss.agenti.dao.OrderRepository;
import com.iss.agenti.dao.OrderedProductRepository;
import com.iss.agenti.dao.UserRepository;
import com.iss.agenti.model.BoughtProduct;
import com.iss.agenti.model.Order;
import com.iss.agenti.model.OrderedProduct;
import com.iss.agenti.model.Requests.AddOrderRequest;
import com.iss.agenti.model.Responses.AddOrderResponse;
import com.iss.agenti.services.OrderService;
import com.iss.agenti.services.ProductService;
import com.iss.agenti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrdersController {

    @Autowired
    private ProductService productService;


    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public AddOrderResponse addOrder(@RequestBody AddOrderRequest addOrderRequest){
        List<BoughtProduct> items = addOrderRequest.getProducts();

        for (BoughtProduct item: items) {
            if ( this.productService.verifyStoc(item) ){
                return new AddOrderResponse("Stoc insuficient pentru " + item.getName());
            }
        }
        System.out.println("Trecut de verificare");
        // create a new order
        System.out.println(addOrderRequest.getUsername());
        int agentid = this.userService.getByUsername(addOrderRequest.getUsername()).getId();
        System.out.println("Trecut de linia 50");
        Order order = this.orderService.addOrder(agentid);
        System.out.println("Trecut de linia 52");
        System.out.println("Trecut de linia 54");
        // update quantities and insert bought products
        for (BoughtProduct item: items){
            this.productService.scadeStoc(item);
            this.orderService.saveOrderedProduct(order.getId(), item.getId(), item.getQuantity());
        }

        return new AddOrderResponse("Succes");
    }
}
