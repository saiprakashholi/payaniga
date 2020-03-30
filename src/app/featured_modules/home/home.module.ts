import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaCommonModule } from 'src/app/shared_modules/pa-common/pa-common.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    FlexLayoutModule,

    // modules import
    PaCommonModule,


    // material
    MatToolbarModule
  ]
})
export class HomeModule { }
