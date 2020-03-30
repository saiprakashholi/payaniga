import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,

    FlexLayoutModule,



    // material
    MatToolbarModule
  ],
  exports: [ToolbarComponent]
})
export class PaCommonModule { }
