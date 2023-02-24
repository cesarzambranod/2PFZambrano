import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    [...materialModules]
  ],
  exports: [
    [...materialModules]
  ]
})
export class MaterialModule {
}
