package com.iss.agenti.dao;

import com.iss.agenti.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {

    Order findByAgentid(int agentid);

}
