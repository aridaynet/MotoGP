import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilotosPageRoutingModule } from './pilotos-routing.module';

import { PilotosPage } from './pilotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilotosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PilotosPage]
})
export class PilotosPageModule {}
