import { Component } from "@angular/core";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { AuthService } from "../auth.service";
import { RegisterRequest } from "src/app/models/auth.models";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    username: string = '';
    password: string = '';

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    signup() {
        const body: RegisterRequest = {
            username: this.username,
            password: this.password
        };
        this.authService.signup(body).subscribe({
            next: (res) => {
                console.log('Signup successful', res);
            },
            error: (err) => {
                console.error('Signup error', err);
            }
        });
    }
}