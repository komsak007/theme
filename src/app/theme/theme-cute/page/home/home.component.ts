import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  darkmode: any = !localStorage.getItem('darkmode')
  constructor() {}

  ngOnInit(): void {
    this.darkmode = !localStorage.getItem('darkmode')
    console.log(this.darkmode);
    
  }

  ngDoCheck() {
    if (localStorage.getItem('button') === 'Y') {
      localStorage.setItem('button', 'N')
      this.darkmode = !this.darkmode
      console.log(this.darkmode);
    }
  }
}
