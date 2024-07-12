package com.example.codsoftspringboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.codsoftspringboot.model.Register;
import com.example.codsoftspringboot.repository.RegisterRepo;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepo registerRepo;

    public List<Register> signInGet() {
        return registerRepo.findAll();

    }

    public String registerUser(String email, String password) {
        if (registerRepo.findByEmail(email) != null) {
            return "User already exists";
        }
        Register user = new Register();
        user.setEmail(email);
        user.setPassword(password); // In a real application, you should hash the password
        registerRepo.save(user);
        return "User created successfully";
    }

    public boolean authenticateUser(String email, String password) {
        Register user = registerRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public Register findByEmail(String email) {
        return registerRepo.findByEmail(email);
    }

    public boolean existsByEmail(String email) {
        return registerRepo.findByEmail(email) != null;
    }

    public void save(Register register) {
        registerRepo.save(register);
    }

    public Optional<Register> getUserById(Integer id) {
        return registerRepo.findById(id);
    }
}
