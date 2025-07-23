import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'e-waste-admin',
        exposedModule: './AdminModule',
      }).then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
