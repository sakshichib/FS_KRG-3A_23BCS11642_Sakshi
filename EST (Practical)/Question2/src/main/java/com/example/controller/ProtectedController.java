package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ProtectedController {

    @GetMapping("/api/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello, authenticated user!");
    }

    @GetMapping("/api/data")
    public Map<String, String> data() {
        return Map.of("data", "This is protected data");
    }
}

