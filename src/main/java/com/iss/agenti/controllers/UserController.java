package com.iss.agenti.controllers;


import com.iss.agenti.model.Requests.AddUserRequest;
import com.iss.agenti.model.Responses.AuthResponse;
import com.iss.agenti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*")
public class UserController {


    @Autowired
    private UserService userService;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ResponseEntity<?> addUser(@RequestBody AddUserRequest addUserRequest){
        this.userService.addUser(addUserRequest.getUsername(), addUserRequest.getPassword());
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @RequestMapping(value="/authenticate", method = RequestMethod.POST)
    public AuthResponse loginUser(@RequestBody AddUserRequest addUserRequest) throws Exception {
        if (this.userService.verify(addUserRequest.getUsername(), addUserRequest.getPassword())){
            return new AuthResponse("OK");
        }
        else {
            throw new Exception("Invalid credentials");
        }
    }


}
