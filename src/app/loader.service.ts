import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private http:HttpClientModule) { }

  show()
  {
    this.http
  }
}
