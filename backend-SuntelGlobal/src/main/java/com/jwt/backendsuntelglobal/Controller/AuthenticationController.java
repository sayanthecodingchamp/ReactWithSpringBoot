package com.jwt.backendsuntelglobal.Controller;

import com.jwt.backendsuntelglobal.Request.AuthenticationRequest;
import com.jwt.backendsuntelglobal.Request.SignupRequest;
import com.jwt.backendsuntelglobal.Response.AuthenticationResponse;
import com.jwt.backendsuntelglobal.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationService service;
    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> signup(@RequestBody SignupRequest request){
        return ResponseEntity.ok(service.signup(request));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
