package com.iss.agenti.services;

import com.iss.agenti.dao.UserRepository;
import com.iss.agenti.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void addUser(String username, String password){
        this.userRepository.save(new User(username, password, true, "user"));
    }

    public User getByUsername(String username){
        return this.userRepository.findByUserName(username);
    }

    public boolean verify(String username, String password){
        return this.userRepository.existsByUserNameAndPassword(username, password);
    }

}
