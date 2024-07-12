export class ImageReference extends ImageBaseItem {
  public ProfileName: string | null;
  public ProfileUrl: string | null;
  public SiteName: string | null;
  public SiteUrl: string | null;

  constructor(
    imageUrl: string,
    profileName: string | null = null,
    profileUrl: string | null = null,
    siteName: string | null = null,
    siteUrl: string | null = null,
    imageClass: string | null = null,
    imageAltText: string | null = null,
    thumbnailUrl: string | null = null,
    thumbnailAltText: string | null = null
  ) {
    super(imageUrl, imageClass, imageAltText, thumbnailUrl, thumbnailAltText);
    this.ProfileName = profileName;
    this.ProfileUrl = profileUrl;
    this.SiteName = siteName;
    this.SiteUrl = siteUrl;
  }
}
