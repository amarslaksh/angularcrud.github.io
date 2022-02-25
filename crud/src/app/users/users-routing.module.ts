import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewUsersComponent} from "./view-users/view-users.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUsersComponent} from "./edit-users/edit-users.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    canDeactivate: [AuthGuard],
    children: [
      {
      path: 'view-users',
      component: ViewUsersComponent,
    },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'edit-user/:id',
        component: EditUsersComponent
      },
      {
        path: 'delete-user/:id',
        component: DeleteUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
