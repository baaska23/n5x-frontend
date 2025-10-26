import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-signin',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.css'
})
export class SigninComponent implements OnInit {
    email: any;
    password: any;
    rememberMe: any;
    ngOnInit(): void {
        console.log("Hello")
    }
}