import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'service', component: ServicesComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);