import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrl: './first-page.component.css',
})
export class FirstPageComponent implements OnInit {
    value: any;
    ngOnInit(): void {
        console.log("Landing page mounted");
    }
}