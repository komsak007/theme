import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-cute',
  templateUrl: './theme-cute.component.html',
  styleUrls: ['./theme-cute.component.css'],
})
export class ThemeCuteComponent implements OnInit {
  darkMode: any;
  textDark = "Light"

  constructor() {}

  ngOnInit(): void {
    this.darkMode = localStorage.getItem('darkmode')
  }

  toggle(e: any) {
    localStorage.setItem('darkmode', e.target.checked);
    localStorage.setItem('button', "Y");

    this.darkMode = e.target.checked;
    
    if(this.darkMode) {
      this.textDark = "Dark"
    } else {
      this.textDark = "Light"
    }
  }
}
