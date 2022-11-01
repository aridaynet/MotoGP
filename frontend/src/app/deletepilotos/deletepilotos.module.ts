import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletepilotosPageRoutingModule } from './deletepilotos-routing.module';

import { DeletepilotosPage } from './deletepilotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletepilotosPageRoutingModule
  ],
  declarations: [DeletepilotosPage]
})
export class DeletepilotosPageModule {}
