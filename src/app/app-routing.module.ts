import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';

const routes: Routes = [

{path:"residences", component:ResidencesComponent },
{path:"details/:id", component:ResidenceDetailComponent},
{path:"home", component:HomeComponent},
//{path:"**",component:NotfoundComponent},
{path:"addResidence",component : ResidenceFormComponent},
{path:"addAppartment",component : AddAppartmentComponent},
{path:'',redirectTo:'home',pathMatch:"full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
