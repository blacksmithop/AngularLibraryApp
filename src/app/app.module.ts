import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { AuthoraddComponent } from './authoradd/authoradd.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ImageUploadService } from './image-upload.service';
import { LoginService } from './login.service';
import { AdditemService } from './additem.service';


import { TokenInterceptor } from './token.interceptor.service';

import { BookaddComponent } from './bookadd/bookadd.component';
import { BookComponent } from './book/book.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AuthorComponent } from './author/author.component';
import { AuthComponent } from './auth/auth.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AuthoraddComponent,
    FooterComponent,
    BookaddComponent,
    BookComponent,
    AuthorComponent,
    AuthComponent,
    EditauthorComponent,
    EditbookComponent,
    DeletebookComponent,
    DeleteauthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [ImageUploadService, LoginService, AdditemService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
