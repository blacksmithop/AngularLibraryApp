import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdditemService } from '../additem.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {
  modalRef?: BsModalRef;
  reader = new FileReader();
  url: any = undefined;
  file: any;
  filename: string = "Preview"

  canUse = localStorage.getItem("role") == 'admin';

  constructor(private modalService: BsModalService,
    private book: AdditemService,
    private fb: FormBuilder,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.canUse) {
      this.router.navigate(['book'])
    }
  }

  // form control 
  addBookForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    genre: ['', Validators.required],
    about: ['', Validators.required],
  })

  onSubmit() {
    var imgUrl: string = this.url;

    var postBody = this.addBookForm.value
    postBody.imgUrl = imgUrl;

    console.log(postBody);
    this.book.newBook(postBody).subscribe(
      response => {
        this.router.navigate(['book'])
      })
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onFileChanged(event: any) {
    this.file = event!.target!.files[0]
    console.log(this.file)
    const mimeType = this.file.type;
    this.filename = this.file.name;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images")
      return;
    }

    this.reader.readAsDataURL(this.file);
    this.reader.onload = (_event) => {
      this.url = this.reader.result;
    }
  }
}
