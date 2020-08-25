import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AjustesComponent } from './ajustes/ajustes.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriasComponent } from './categorias/categorias.component';


import { LoginComponent } from '../auth/login/login.component'

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        // canActivate: [LoginComponent],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'blog', component: BlogComponent, data: { titulo: 'Blog' }},
            { path: 'categorias', component: CategoriasComponent, data: { titulo: 'Categorias' }},
            // { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            { path: 'ajustes', component: AjustesComponent, data: { titulo: 'Ajustes' }},
            // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


