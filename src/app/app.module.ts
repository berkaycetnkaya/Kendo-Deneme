import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from "@angular/forms";

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";

import { HttpClientModule,
   HTTP_INTERCEPTORS,
   HttpClient,
   HttpClientJsonpModule
  } from '@angular/common/http';



import { ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { LabelModule } from "@progress/kendo-angular-label";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditService, GridModule } from '@progress/kendo-angular-grid';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { AnagridComponent } from './components/editpopup/anagrid/anagrid.component';
import { CategoryGridComponent } from './components/editpopup/category-grid/category-grid.component';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    AnagridComponent,
     CategoryGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    GridModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DialogModule,
    InputsModule,
    LabelModule,
    HttpClientModule,
  ],
  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
