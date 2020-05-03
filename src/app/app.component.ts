import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayFooter = false;

  ngOnInit() {
    setTimeout(() => {
      this.displayFooter = true;
    }, 700);
  }
}
