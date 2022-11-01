import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletepilotosPage } from './deletepilotos.page';

const routes: Routes = [
  {
    path: '',
    component: DeletepilotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletepilotosPageRoutingModule {}
