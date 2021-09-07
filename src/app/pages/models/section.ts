export default class SectionModel {
  title: string;
  description: string;
  canDelete: boolean;

  constructor(title: string, description: string, canDelete: boolean) {
    this.title = title;
    this.description = description;
    this.canDelete = canDelete;
  }
}
