export class TimelineItem {
  public StartYear: Date;
  public EndYear: Date;
  public Title: string;
  public Description: string;
  public Classes: string[];

  constructor(
    startYear: Date,
    endYear: Date,
    title: string,
    description: string,
    classes: string[] = []
  ) {
    this.StartYear = startYear;
    this.EndYear = endYear;
    this.Title = title;
    this.Description = description;
    this.Classes = classes;
  }
}
