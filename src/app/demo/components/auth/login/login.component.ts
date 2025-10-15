import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../auth.service';
import { LoginRequest } from 'src/app/models/auth.models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    password: string = "";
    username: string = "";

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    login() {
        const body: LoginRequest = {
            username: this.username,
            password: this.password
        }
        this.authService.login(body).subscribe({
            next: (res) => {
                console.log('Login successful', res);
                // localStorage.setItem('token', res.token);
                // console.log("My token is: ", res.token);
            },
            error: (err) => {
                console.log('Login error', err);
            }
        })
    }
}
