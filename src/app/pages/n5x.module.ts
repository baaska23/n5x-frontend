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
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "../components/header/header.component";
import { AppConfigModule } from "src/app/layout/config/config.module";
import { CarouselComponent } from "src/app/components/carousel/carousel.component";

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
    RadioButtonModule,
    HeaderComponent,
    AppConfigModule,
    CarouselComponent
],
    declarations: [
        FirstPageComponent,
        SigninComponent,
        ProfilesComponent,
        HomeComponent
    ]
})
export class n5xModule { }