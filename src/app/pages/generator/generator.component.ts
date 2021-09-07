import { Component, OnInit } from '@angular/core';
import SectionModel from '../models/section';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  titleH1!: string;
  title!: string;
  description!: string;

  sections!: Array<SectionModel>;

  constructor() { }

  ngOnInit(): void {
    this.sections = [
      new SectionModel(this.title, this.description, false)
    ];
  }

  createNewSection() {
    let title = '';
    let description = '';
    return this.sections.push(new SectionModel(title, description, true));
  }

  deleteSection() {
    return this.sections.pop();
  }

  saveTextAsFile(data: string, fileName: string) {

    if (!data) {
      console.error('Console.save: No data')
      return;
    }

    if (!fileName) fileName = 'console.json';

    let blob = new Blob([data], { type: 'text/plain' });
    let  el = document.createEvent('MouseEvents');
    let  a = document.createElement('a');

    // FOR IE:

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    }
    else {
      el = document.createEvent('MouseEvents');
      a = document.createElement('a');

      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      el.initEvent('click', true, false);
      a.dispatchEvent(el);
    }
  }

  downloadFile() {
    const fileText =
    `# ${this.titleH1}\r\n\n${this.sections.map(section => `### ${section.title}\r\n\n${section.description}`).toString().replace(',', '\r\n\n')}`;

    const fileName = 'README.md';

    this.saveTextAsFile(fileText, fileName);

    this.titleH1 = '';
    this.sections = [
      new SectionModel(this.title, this.description, false)
    ];
  }

}
