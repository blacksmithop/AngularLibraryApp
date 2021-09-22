import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdditemService } from '../additem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  modalRef?: BsModalRef;
  reader = new FileReader();
  url: any = undefined;
  file: any;
  id: string;
  filename: string = "Preview"
  canUse = localStorage.getItem("role") == 'admin';

  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private item: AdditemService,
    private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    if (!this.canUse) {
      this.router.navigate(['author'])
    }

    this.item.getAuthor(this.id).subscribe((data: any) => {
      delete data['__v'];
      delete data['_id'];
      this.url = data['imgUrl'];
      delete data['imgUrl'];
      console.log(data);

      for (let key in data) {
        this.addAuthorForm.get(key)!.setValue(data[key]);
      }
    })
  }

  // form control 
  addAuthorForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    language: ['', Validators.required],
    work: ['', Validators.required],
  })

  onSubmit() {
    var imgUrl: string = this.url;

    var postBody = this.addAuthorForm.value
    postBody.imgUrl = imgUrl;

    console.log(postBody);

    this.item.updateAuthor(postBody, this.id).subscribe(
      response => {
        this.router.navigate(['author'])
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
