import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdditemService {

  constructor(private http: HttpClient) { }

  address: string = 'http://localhost:8080';


  getBookCollections() {
    return this.http.get(`${this.address}/group/books`)
  }

  getBook(_id: any) {
    return this.http.get(`${this.address}/group/books/` + _id);
  }

  getAuthorCollections() {
    return this.http.get(`${this.address}/group/authors`)
  }

  getAuthor(_id: any) {
    return this.http.get(`${this.address}/group/authors/` + _id);
  }

  newBook(item: any) {
    return this.http.post(`${this.address}/add/add_book`, item)
  }

  newAuthor(item: any) {
    return this.http.post(`${this.address}/add/add_author`, { "author": item })
  }

  deleteBook(_id: any) {
    return this.http.delete(`${this.address}/delete/deletebook/` + _id);
  }

  updateBook(item: any, _id: any) {
    return this.http.post(`${this.address}/add/update_book/` + _id, { "book": item })
  }

  updateAuthor(item: any, _id: any) {
    return this.http.post(`${this.address}/add/update_author/` + _id, { "author": item })
  }

  deleteAuthor(_id: any) {
    return this.http.delete(`${this.address}/delete/deleteauthor/` + _id);
  }


}
