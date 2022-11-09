import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './main/layout.module';
import { SkeletonComponent } from './main/skeleton/skeleton.component';

const routes: Routes = [
  // {
  //  path: '', component: SkeletonComponent,
  //  children: [
  //     {
  //       path: '', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  //     }
  //   ]
  // }
      { path: '', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // useHash para quitar el simbolo de gato
  exports: [RouterModule]
})
export class AppRoutingModule {
}
