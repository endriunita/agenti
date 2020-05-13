package com.iss.agenti.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.processing.Generated;
import javax.persistence.*;


@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "tb_order")
public class Order {

    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private int id;
    private int agentid;
    private String placeholder;


    public Order(int agentid, String placeholder){
        this.agentid = agentid;
        this.placeholder = placeholder;
    }

    public Order(int id, int agentid, String placeholder){
        this.id = id;
        this.agentid = agentid;
        this.placeholder = placeholder;
    }
}
