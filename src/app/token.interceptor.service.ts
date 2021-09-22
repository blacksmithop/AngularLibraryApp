import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor
} from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: any, nxt: any) {
    var login = this.injector.get(LoginService)
    let tokenizedReq = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${login.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)

  }
}