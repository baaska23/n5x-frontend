import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstPageComponent } from "./first-page/first-page.component";
import { n5xRoutingModule } from "./n5x-routing.module";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { FaqComponent } from "../components/faq/faq.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AccordionModule } from "primeng/accordion";

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        FaqComponent,
        AccordionModule,
        FooterComponent,
        n5xRoutingModule
    ],
    declarations: [
        FirstPageComponent,     
    ]
})
export class n5xModule { }