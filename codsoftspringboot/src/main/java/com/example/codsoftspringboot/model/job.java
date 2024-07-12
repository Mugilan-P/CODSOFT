package com.example.codsoftspringboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class job {
    @Id
    private Long id;
    private String title;
    private String company;
    private String description;
    private String location;
    private String salary;
    private String contact;
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public job(String contact) {
        this.contact = contact;
    }

    public job(Long id, String title, String description, String location, String salary, String contact,
            String company, String email) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.description = description;
        this.location = location;
        this.salary = salary;
        this.contact = contact;
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public job() {
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public String getSalary() {
        return salary;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

}
