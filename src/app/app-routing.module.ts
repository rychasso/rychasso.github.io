import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocaleInitializerGuard } from '@i18n/locale-initializer.guard';
import { AppLayoutComponent } from '@modules/layout';

const routes: Routes = [
  {
    path: '',
    canActivate: [LocaleInitializerGuard],
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
