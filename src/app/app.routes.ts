import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Book } from './book/book';
import { User } from './user/user';
import { Component } from '@angular/core';
import { authGuard } from './auth-guard';


export const routes: Routes = [
    {
        path:'',
        component : Home,
        pathMatch:'full',
    },
    {
        path : 'user',
        component:User,
    },
    {
        path:'book',
        component:Book,
        canActivate:[authGuard],
    }
];
