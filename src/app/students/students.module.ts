import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentFormComponent} from './components/student-form/student-form.component';
import {StudentManagementComponent} from './components/student-management/student-management.component';
import {StudentsRoutingModule} from "./students-routing.module";
import {StudentsService} from "./services/students.service";
import {CompleteNamePipe} from './pipes/complete-name.pipe';
import {StudentEditFormComponent} from './components/student-edit-form/student-edit-form.component';
import {MaterialModule} from "../shared/material/material.module";
import {NotFoundComponent} from "../core/components/not-found/not-found.component";


@NgModule({
  declarations: [
    StudentFormComponent,
    StudentManagementComponent,
    CompleteNamePipe,
    StudentEditFormComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule {
}
