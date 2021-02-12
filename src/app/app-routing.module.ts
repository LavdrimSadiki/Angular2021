import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';

const routes: Routes = [
  {path: 'collections',
  loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
  { path: 'elements',
  loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)},
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
