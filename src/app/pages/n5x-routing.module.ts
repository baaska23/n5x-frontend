import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SigninComponent } from "./sign-in/sign-in.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { HomeComponent } from "./home/home.component";
import { ShowDetailComponent } from "./content-detail/show-detail.component";
import { MovieDetailComponent } from "./content-detail/movie-detail.component";
import { ActivePlayerComponent } from "./active-player/active-player.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'landingPage', component: FirstPageComponent},
        {path: 'signInPage', component: SigninComponent},
        {path: 'profilesPage', component: ProfilesComponent},
        {path: 'homePage', component: HomeComponent},
        {path: 'showDetailDialog', component: ShowDetailComponent},
        {path: 'movieDetailDialog', component: MovieDetailComponent},
        {path: 'activePlayer', component: ActivePlayerComponent}
    ])],
    exports: [RouterModule]
})
export class n5xRoutingModule { }