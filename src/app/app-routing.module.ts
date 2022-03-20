import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { TransFormComponent } from './trans-form/trans-form.component';


export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component:ExtratoComponent},
  {path: 'nova-transferencia', component: TransFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
