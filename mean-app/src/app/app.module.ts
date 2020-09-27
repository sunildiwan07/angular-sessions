import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule,MatCardModule, MatAutocomplete, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatListModule, MatRadioModule, 
  MatSelectModule, MatNativeDateModule, MatSliderModule, MatSlideToggleModule, MatAutocompleteModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
