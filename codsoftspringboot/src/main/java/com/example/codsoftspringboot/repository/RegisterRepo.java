package com.example.codsoftspringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codsoftspringboot.model.Register;

@Repository
public interface RegisterRepo extends JpaRepository<Register, Integer> {
    Register findByEmail(String email);
}
