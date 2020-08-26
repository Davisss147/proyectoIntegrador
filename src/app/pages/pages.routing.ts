import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AjustesComponent } from './ajustes/ajustes.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProfileComponent } from './profile/profile.component';

import { IdentityGuard } from '../services/identity.guard';


import { LoginComponent } from '../auth/login/login.component'

const routes: Routes = [
    { 
        path: 'dashboard',
        component: PagesComponent,
        // canActivate: [LoginComponent],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Home' }, canActivate: [IdentityGuard]},
            { path: 'blog', component: BlogComponent, data: { titulo: 'Blog' }, canActivate: [IdentityGuard]},
            { path: 'categorias', component: CategoriasComponent, data: { titulo: 'Categorias' }, canActivate: [IdentityGuard]},
            { path: 'ajustes', component: AjustesComponent, data: { titulo: 'Ajustes' }, canActivate: [IdentityGuard]},
            { path: 'entrada/:id', component: PostDetailComponent, data: { titulo: 'Blog' }, canActivate: [IdentityGuard]},
            { path: 'editar-entrada/:id', component: PostEditComponent, data: { titulo: 'Editar-Blog' }, canActivate: [IdentityGuard]},
            { path: 'categoria/:id', component: CategoryDetailComponent, data: { titulo: 'Categoria' }, canActivate: [IdentityGuard]},
            { path: 'perfil/:id', component: ProfileComponent, data: { titulo: 'Perfil' }, canActivate: [IdentityGuard]}

            // { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' }},
            // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


