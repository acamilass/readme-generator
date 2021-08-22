import { Component, OnInit } from '@angular/core';
import SectionModel from '../models/section';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  titleH1!: string;
  titleH2!: string;
  description!: string;

  sections!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.sections = [
      new SectionModel(this.titleH2, this.description)
    ];
  }

  createNewSection() {
    let title = '';
    let description = '';
    return this.sections.push(new SectionModel(title, description));
  }

}
