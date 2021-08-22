import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  titleH1!: string;
  titleH2!: string;
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
