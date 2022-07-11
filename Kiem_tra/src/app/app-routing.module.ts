import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./crud/components/list.component";
import {AddComponent} from "./crud/components/add.component";
import {EditComponent} from "./crud/components/edit.component";
import {DeleteComponent} from "./crud/components/delete.component";
import {ShowComponent} from "./crud/components/show.component";

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'create', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'show/:id', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
