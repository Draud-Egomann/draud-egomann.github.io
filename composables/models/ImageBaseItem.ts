export class ImageBaseItem {
  public ImageUrl: string;
  public ImageClass: string | null;
  public ImageAltText: string | null;
  public ThumbnailUrl: string | null;
  public ThumbnailAltText: string | null;

  constructor(
    ImageUrl: string,
    ImageClass: string | null = null,
    ImageAltText: string | null = null,
    ThumbnailUrl: string | null = null,
    ThumbnailAltText: string | null = null
  ) {
    this.ImageUrl = ImageUrl;
    this.ImageClass = ImageClass;
    this.ImageAltText = ImageAltText;
    this.ThumbnailUrl = ThumbnailUrl;
    this.ThumbnailAltText = ThumbnailAltText;
  }
}
