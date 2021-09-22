import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdditemService } from '../additem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteauthor',
  templateUrl: './deleteauthor.component.html',
  styleUrls: ['./deleteauthor.component.css']
})
export class DeleteauthorComponent implements OnInit {

  id: string;
  canUse = localStorage.getItem("role") == 'admin';

  constructor(
    private route: ActivatedRoute,
    private item: AdditemService,
    private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }


  ngOnInit(): void {
    if (!this.canUse) {
      this.router.navigate(['author'])
    }
    else {
      this.item.deleteAuthor(this.id).subscribe((data: any) => {
        this.router.navigate(['author'])
      })
    }
  }

}
