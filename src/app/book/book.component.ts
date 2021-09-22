import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdditemService } from '../additem.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isCollapsed = true;
  data: any[] = [];
  constructor(private router: Router,
    private item: AdditemService) { }

  addBook() {
    this.router.navigate(['addbook'])
  }
  ngOnInit(): void {
    this.item.getBookCollections().subscribe((data: any) => {
      this.data = data;
    })
    console.log(this.data)
  }

}
