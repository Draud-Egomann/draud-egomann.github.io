import { stringHelper } from "~/utils/stringHelper";

export class SocialLink {
  public Name: string;
  public Icon: string | string[];
  public LinkUrl: string | null;

  constructor(
    name: string,
    icon: string | string[],
    linkUrl: string | null = null
  ) {
    this.Name = name;
    this.Icon = icon;
    this.LinkUrl = linkUrl;
  }

  get HasLink(): boolean {
    return !stringHelper.IsNullOrEmpty(this.LinkUrl);
  }
}