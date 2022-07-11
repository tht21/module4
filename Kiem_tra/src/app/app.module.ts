import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddComponent } from './crud/components/add.component';
import { EditComponent } from './crud/components/edit.component';
import { DeleteComponent } from './crud/components/delete.component';
import { ListComponent } from './crud/components/list.component';
import { ShowComponent } from './crud/components/show.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,

    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
