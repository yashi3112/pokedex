import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'; 
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterLoaderService implements HttpInterceptor {

  constructor(private loadingService:LoaderService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    this.loadingService.show();
    return next.handle(req).pipe(
      finalize(()=>{
        this.loadingService.hide();
      })
    );
  }
}
