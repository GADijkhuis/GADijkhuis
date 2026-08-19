import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/home-layout/home-layout.component').then(m => m.HomeLayoutComponent),
        pathMatch: "prefix",
    }
];
