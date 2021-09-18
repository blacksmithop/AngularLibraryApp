import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AuthoraddComponent } from './authoradd/authoradd.component';
import { BookaddComponent } from './bookadd/bookadd.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'addauthor', component: AuthoraddComponent },
  { path: 'addbook', component: BookaddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
