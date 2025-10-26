import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page/first-page.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'landingPage', component: FirstPageComponent}
    ])],
    exports: [RouterModule]
})
export class n5xRoutingModule { }