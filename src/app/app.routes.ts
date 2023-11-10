import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent 
    }, 
    {
        path: 'register',
        title: 'Registro',
        component: RegisterComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
