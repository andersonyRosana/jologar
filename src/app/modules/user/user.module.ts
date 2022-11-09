import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule, //en caso de que use directivas
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
