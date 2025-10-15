import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest, RegisterRequest } from "src/app/models/auth.models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    signup(body: RegisterRequest) {
        return this.http.post<RegisterRequest>(environment.url + '/auth/register', body);
    }

    login(body: LoginRequest) {
        return this.http.post<LoginRequest>(environment.url + '/auth/login', body)
    }
}