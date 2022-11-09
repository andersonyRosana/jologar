import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SkeletonComponent } from '../../main/skeleton/skeleton.component';

const routes: Routes = [
  { path: '', component: SkeletonComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'detail', component: UserDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
