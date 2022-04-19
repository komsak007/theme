import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  darkmode: any = !localStorage.getItem('darkmode')
  constructor() {}

  ngOnInit(): void {
    console.log(this.darkmode);
  }

  ngDoCheck() {
    if (localStorage.getItem('button') === 'Y') {
      localStorage.setItem('button', 'N');
      this.darkmode = !this.darkmode;
      console.log(this.darkmode);
    }
  }
}
