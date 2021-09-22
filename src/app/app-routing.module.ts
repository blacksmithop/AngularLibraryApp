import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './auth/auth.component';

import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
;
import { AuthoraddComponent } from './authoradd/authoradd.component';
import { BookaddComponent } from './bookadd/bookadd.component';

import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';

import { AuthGuard } from './authguard.guard';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';
import { DeletebookComponent } from './deletebook/deletebook.component';

const routes: Routes = [
  { // Routes that need login
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LandingComponent, canActivate: [AuthGuard] },
      { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
      { path: 'author', component: AuthorComponent, canActivate: [AuthGuard] },
      { path: 'addauthor', component: AuthoraddComponent, canActivate: [AuthGuard] },
      { path: 'addbook', component: BookaddComponent, canActivate: [AuthGuard] },
      { path: 'editauthor/:id', component: EditauthorComponent, canActivate: [AuthGuard] },
      { path: 'editbook/:id', component: EditbookComponent, canActivate: [AuthGuard] },
      { path: 'deleteauthor/:id', component: DeleteauthorComponent, canActivate: [AuthGuard] },
      { path: 'deletebook/:id', component: DeletebookComponent, canActivate: [AuthGuard] },
    ]
  },
  { // Public routes
    path: '',
    children: [
      { path: 'auth', component: AuthComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
