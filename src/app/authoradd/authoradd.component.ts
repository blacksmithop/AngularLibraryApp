import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-authoradd',
  templateUrl: './authoradd.component.html',
  styleUrls: ['./authoradd.component.css']
})
export class AuthoraddComponent implements OnInit {
  modalRef?: BsModalRef;
  url: any = undefined;
  imgUrl: any;
  filename: string = "Preview"
  // form control 
  addAuthorForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    language: ['', Validators.required],
    work: ['', Validators.required],
  })

  onSubmit() {
    console.log(this.addAuthorForm.value)
  }

  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private api: ImageUploadService) { }
  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onFileChanged(event: any) {
    var file: File = event!.target!.files[0]

    const mimeType = file.type;
    this.filename = file.name;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images")
      return;
    }

    this.api.upload(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
