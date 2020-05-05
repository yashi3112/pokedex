import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  display:boolean=false;
  constructor(private loadingService:LoaderService) { }

  ngOnInit(): void {
    this.loadingService.loader$.subscribe(response => {
      this.display=response;
    });
  }



}
