export class FlipCardItem extends ImageBaseItem {
  public FrontText: string;
  public BackText: string | null;

  constructor(
    imageUrl: string,
    frontText: string,
    backText: string | null = null,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.FrontText = frontText;
    this.BackText = backText;
  }
}
