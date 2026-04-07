export class CarouselWord extends ImageBaseItem {
  public Word: string;
  public AnimationDelay: Number;

  constructor(
    imageUrl: string,
    word: string,
    animationDelay: Number,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.Word = word;
    this.AnimationDelay = animationDelay;
  }
}
