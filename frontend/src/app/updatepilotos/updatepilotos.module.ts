import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatepilotosPageRoutingModule } from './updatepilotos-routing.module';

import { UpdatepilotosPage } from './updatepilotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepilotosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatepilotosPage]
})
export class UpdatepilotosPageModule {}
