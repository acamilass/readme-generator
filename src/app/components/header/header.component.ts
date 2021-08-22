import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToLightMode() {
    this.isDarkMode = false;

    document.getElementById('body').style.backgroundColor = '#f7f7ff';
    document.getElementById('body').style.color = '#070600';
    document.getElementById('section-btn').style.color = '#070600';
    document.getElementById('btn-download').style.backgroundColor = '#435058';
    document.getElementById('btn-download').style.color = '#f7f7ff';
  }

  goToDarkMode() {
    this.isDarkMode = true;

    document.getElementById('body').style.backgroundColor = '#1e1e24';
    document.getElementById('body').style.color = '#f7f7ff';
    document.getElementById('section-btn').style.color = '#f7f7ff';
    document.getElementById('btn-download').style.backgroundColor = '#f7f7ff';
    document.getElementById('btn-download').style.color = '#070600';
  }

}
