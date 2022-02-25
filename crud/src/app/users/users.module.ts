import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {ViewUsersComponent} from "./view-users/view-users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "../search.pipe";
import {NgxPaginationModule} from "ngx-pagination";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUsersComponent,
    SearchPipe,
    AddUserComponent,
    EditUsersComponent,
    DeleteUserComponent
  ],
  imports: [
      CommonModule,
      UsersRoutingModule,
      FormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatIconModule,
      MatTableModule,
      MatButtonModule
  ],
  providers: [
    DatePipe
  ]
})
export class UsersModule { }
