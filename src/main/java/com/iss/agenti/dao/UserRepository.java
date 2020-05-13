package com.iss.agenti.dao;

import com.iss.agenti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByUserNameAndPassword(String username, String password);

    User findByUserName(String username);
}
