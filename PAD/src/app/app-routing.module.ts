import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'buscarusugeo',
    loadChildren: () => import('./buscarusugeo/buscarusugeo.module').then( m => m.BuscarusugeoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'buscarusugeopais',
    loadChildren: () => import('./buscarusugeopais/buscarusugeopais.module').then( m => m.BuscarusugeopaisPageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
