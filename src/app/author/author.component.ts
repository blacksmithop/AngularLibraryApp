import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdditemService } from '../additem.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  isCollapsed = true;
  data: any[] = [];

  constructor(private router: Router,
    private item: AdditemService) { }

  addAuthor() {
    this.router.navigate(['addauthor'])
  }

  ngOnInit(): void {
    this.item.getAuthorCollections().subscribe((data: any) => {
      this.data = data;
    })
    console.log(this.data)
  }

}
