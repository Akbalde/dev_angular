import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StustentsListComponent } from './student/stustents-list/stustents-list.component';
import { AddStustentsComponent } from './student/add-stustents/add-stustents.component';
import { EditStustentsComponent } from './student/edit-stustents/edit-stustents.component';

export const routes: Routes = [
  {path: '', component: StustentsListComponent},
  {path: 'add_student', component: AddStustentsComponent},
  {path: 'edit_student/:id', component: EditStustentsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
