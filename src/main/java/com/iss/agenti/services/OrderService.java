package com.iss.agenti.services;

import com.iss.agenti.dao.OrderRepository;
import com.iss.agenti.dao.OrderedProductRepository;
import com.iss.agenti.model.Order;
import com.iss.agenti.model.OrderedProduct;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderedProductRepository orderedProductRepository;


    public Order addOrder(int agentid){
        Order aux = new Order(agentid, "placeholder");
        return this.orderRepository.save(aux);
    }

    public Order getOrderByAgent(int agentid){
        return this.orderRepository.findByAgentid(agentid);
    }

    public void saveOrderedProduct(int orderid, int productid, int quantity){
        this.orderedProductRepository.save(new OrderedProduct(orderid, productid, quantity));
    }
}
