import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';
import { BiogrhapyComponent } from './biogrhapy/biogrhapy.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  { path: 'collections',
    component: CollectionsHomeComponent,
    children: [
      { path: 'biogrhapy' , component: BiogrhapyComponent   },
      { path: 'companies' , component: CompaniesComponent},
      { path: 'partners' , component: PartnersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
