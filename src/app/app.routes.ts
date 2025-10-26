import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Book } from './book/book';
import { User } from './user/user';
import { Book1 } from './book1/book1';
import { Book2 } from './book2/book2';
import { Component } from '@angular/core';


export const routes: Routes = [
    {
        path:'',
        component : Home,
    },
    {
        path : 'user',
        component:User,
    },
    {
        path:'book',
        component:Book,
        children:[
            {
                path:'book1',
                component:Book1
            },
            {
                path: 'book2',
                component:Book2
            }
        ]
    }
];
