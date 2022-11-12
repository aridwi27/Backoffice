import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './shared/layout/components/layout-main/layout-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./views/add-user/add-user.module').then((m) => m.AddUserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
