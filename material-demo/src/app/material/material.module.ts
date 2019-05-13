import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
   MatButtonToggleModule, MatIconModule,MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule
  } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule, MatCardModule, MatButtonToggleModule, MatIconModule, MatBadgeModule,
  MatProgressSpinnerModule,MatToolbarModule,MatSidenavModule

];


@NgModule({
  declarations: [],
  imports: [

    BrowserAnimationsModule,
    MaterialComponents
  ],
  exports : [
    BrowserAnimationsModule,
    MaterialComponents
  ]

})
export class MaterialModule { }
