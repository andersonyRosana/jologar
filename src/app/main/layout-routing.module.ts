import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';

const routes: Routes = [
  { path: 'skeleton', component: SkeletonComponent }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

