import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocaleInitializer } from '@i18n/locale-initializer';
import { AppLayoutComponent } from '@modules/layout';

const routes: Routes = [
  {
    path: '',
    canActivate: [LocaleInitializer],
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'process',
        loadChildren: () => import('./pages/process/process.module').then((m) => m.ProcessModule),
      },
    ],
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
