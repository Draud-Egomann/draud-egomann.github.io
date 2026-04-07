export class AccordionItem {
  title: string;
  contentType: "text" | "link";
  contentValue: string;

  constructor(
    _title: string,
    _contentType: "text" | "link",
    _contentValue: string
  ) {
    this.title = _title;
    this.contentType = _contentType;
    this.contentValue = _contentValue;
  }
}
