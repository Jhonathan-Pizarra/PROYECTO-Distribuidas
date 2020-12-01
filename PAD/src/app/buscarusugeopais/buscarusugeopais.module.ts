import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarusugeopaisPageRoutingModule } from './buscarusugeopais-routing.module';

import { BuscarusugeopaisPage } from './buscarusugeopais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarusugeopaisPageRoutingModule
  ],
  declarations: [BuscarusugeopaisPage]
})
export class BuscarusugeopaisPageModule {}
