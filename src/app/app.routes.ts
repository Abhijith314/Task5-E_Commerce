import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { Component } from '@angular/core';
import { ProductComponent } from './pages/product/product.component';
import { CardComponent } from './unit/card/card.component';
import { CardviewComponent } from './pages/cardview/cardview.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"product",component:ProductComponent},
    {path:"login",component:LoginComponent},
    {path:"product/:id",component:CardviewComponent},
];
