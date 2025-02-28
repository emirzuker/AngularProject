import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
    ResidenceDetailComponent,
    HomeComponent,
    NotfoundComponent,
    ResidenceFormComponent,
    AddAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
