import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
const angMat = [
  MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatToolbarModule,MatIconModule
,MatRadioModule
]



@NgModule({
  declarations: [],
  imports: [ angMat
  ],
  exports:[angMat]
})
export class MaterialModule { }
