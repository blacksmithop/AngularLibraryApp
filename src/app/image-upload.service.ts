import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) {
  }


  upload(b64Image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${environment.CLIENT_ID}}`
      }),
    };
    const formData = new FormData();
    formData.append('image', b64Image);
    return this.http.post(environment.IMG_URL, formData, httpOptions).subscribe(res => console.log(res));;
  }

}
