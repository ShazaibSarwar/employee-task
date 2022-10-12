import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module').then(e => e.EmployeeModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'employee'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
