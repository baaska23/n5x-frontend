import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SigninComponent } from "./sign-in/sign-in.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'landingPage', component: FirstPageComponent},
        {path: 'signInPage', component: SigninComponent}
    ])],
    exports: [RouterModule]
})
export class n5xRoutingModule { }