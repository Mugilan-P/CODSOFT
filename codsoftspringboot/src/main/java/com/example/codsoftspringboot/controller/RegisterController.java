package com.example.codsoftspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.codsoftspringboot.model.Register;
import com.example.codsoftspringboot.service.RegisterService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RegisterController {
    @Autowired
    public RegisterService registerService;

    // @PostMapping("/post")
    // public Register postMethodName(@RequestBody Register entity) {

    // registerService.signUpPost(entity);
    // return entity;
    // }
    @GetMapping("/getAll")
    public List<Register> getALL() {
        return registerService.signInGet();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Register registerRequest) {
        if (registerService.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use.");
        }
        registerService.save(registerRequest);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Register loginRequest) {
        Register user = registerService.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Return the Register object instead of a custom response class
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).body("Invalid email/password");
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Register> getUserById(@PathVariable int id) {
        Optional<Register> user = registerService.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}