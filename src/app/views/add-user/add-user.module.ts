import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    AddUsersComponent
  ]
})
export class AddUserModule { }
