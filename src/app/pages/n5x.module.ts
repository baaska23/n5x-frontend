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
import { SigninComponent } from "./sign-in/sign-in.component";
import { RadioButtonModule } from "primeng/radiobutton";
import { ProfilesComponent } from "./profiles/profiles.component";

@NgModule({
    imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FaqComponent,
    AccordionModule,
    FooterComponent,
    n5xRoutingModule,
    RadioButtonModule
],
    declarations: [
        FirstPageComponent,
        SigninComponent,
        ProfilesComponent
    ]
})
export class n5xModule { }