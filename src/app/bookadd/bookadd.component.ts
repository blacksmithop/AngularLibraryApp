import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageUploadService } from '../image-upload.service';

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

  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private api: ImageUploadService,) { }
  ngOnInit(): void {
  }

  // form control 
  addBookForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    genre: ['', Validators.required],
    about: ['', Validators.required],
  })

  onSubmit() {
    var imgUrl: string = '';
    this.api.upload(this.file).subscribe(
      (res: any) => {
        console.log('HTTP response', res);
        imgUrl = res.data.link;
      },
      err => {
        console.log('Imgur upload failed, converting to base64', err.status);
        imgUrl = this.url;
      },
      () => console.log('HTTP request completed'));
    if (imgUrl == '') {
      imgUrl = this.url;
    }
    var postBody = this.addBookForm.value
    postBody.imgUrl = imgUrl;
    console.log(postBody);
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
