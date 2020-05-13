package com.iss.agenti.model.Requests;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class AddUserRequest {
    private String username;
    private String password;


}
