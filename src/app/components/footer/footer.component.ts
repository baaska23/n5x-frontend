import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    standalone: true,
    imports: [ButtonModule]
})
export class FooterComponent {

}