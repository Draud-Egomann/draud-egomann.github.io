import { stringHelper } from "~/utils/stringHelper";

export class MediaItem extends ImageBaseItem {
  public Title: string | null;
  public Description: string | null;
  public LinkUrl: string | null;
  public LinkText: string | null;

  constructor(
    imageUrl: string,
    title: string | null = null,
    description: string | null = null,
    linkUrl: string | null = null,
    linkText: string | null = null,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.Title = title;
    this.Description = description;
    this.LinkUrl = linkUrl;
    this.LinkText = linkText;
  }

  // Example of a property with a getter
  get HasLink(): boolean {
    return !stringHelper.IsNullOrEmpty(this.LinkUrl);
  }
}
