import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignupRoutingModule } from "./signup-routing.module";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { SignupComponent } from "./signup.component";

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [SignupComponent]
})
export class SignupModule {}