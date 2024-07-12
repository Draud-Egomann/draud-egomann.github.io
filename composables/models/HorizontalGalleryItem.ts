export class HorizontalGalleryItem extends ImageBaseItem {
  public Id: Number;
  public Position: string;
  public TranslateX: Number;

  constructor(
    imageUrl: string,
    id: Number,
    position: string,
    translateX: Number,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.Id = id;
    this.Position = position;
    this.TranslateX = translateX;
  }
}
