import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepilotosPage } from './updatepilotos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepilotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepilotosPageRoutingModule {}
