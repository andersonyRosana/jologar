import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './/skeleton/skeleton.component'
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
