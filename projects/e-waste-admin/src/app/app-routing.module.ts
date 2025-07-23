import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('./features/requests/requests.module').then(
        (m) => m.RequestsModule
      ),
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('./features/cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
