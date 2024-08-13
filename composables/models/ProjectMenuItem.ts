import type { MediaItem } from "#imports";
import type { ProjectStatus } from "../enums/ProjectStatus";

export class ProjectMenuItem extends ImageBaseItem {
  public Title: string;
  public Description: string;
  public MoreInfoText: string | null;
  public ProjectStatus: ProjectStatus | null;
  public LinkToLiveSite: string | null;
  public LinkToSourceCode: string | null;
  public LinkToSourceCodes: string[] | null;
  public Classes: string[];
  public Slides: MediaItem[] | null;

  constructor(
    title: string,
    description: string,
    moreInfoText: string | null = null,
    projectStatus: ProjectStatus | null = null,
    linkToLiveSite: string | null = null,
    linkToSourceCode: string | null = null,
    linkToSourceCodes: string[] | null = null,
    classes: string[] = [],
    slides: MediaItem[] | null = null,
    imageUrl: string,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.Title = title;
    this.Description = description;
    this.MoreInfoText = moreInfoText;
    this.ProjectStatus = projectStatus;
    this.LinkToLiveSite = linkToLiveSite;
    this.LinkToSourceCode = linkToSourceCode;
    this.LinkToSourceCodes = linkToSourceCodes;
    this.Classes = classes;
    this.Slides = slides;
  }

  get HasMoreInfo(): boolean {
    return !stringHelper.IsNullOrEmpty(this.MoreInfoText);
  }
}
