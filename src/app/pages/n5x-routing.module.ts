import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SigninComponent } from "./sign-in/sign-in.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'landingPage', component: FirstPageComponent},
        {path: 'signInPage', component: SigninComponent},
        {path: 'profilesPage', component: ProfilesComponent},
        {path: 'homePage', component: HomeComponent}
    ])],
    exports: [RouterModule]
})
export class n5xRoutingModule { }