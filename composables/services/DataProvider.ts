import {
  MediaItem,
  FlipCardItem,
  CarouselWord,
  TimelineItem,
  ProjectMenuItem,
  ImageReference,
} from "#imports";

export class DataProvider {
  static GetNavBarLinks = (t: (key: string) => string): [string, string][] => [
    [t('mainLayout.header.home'), "/"],
    [t('mainLayout.header.about'), "/about"],
    [t('mainLayout.header.experience'), "/experience"],
    [t('mainLayout.header.projects'), "/projects"],
    [t('mainLayout.header.contact'), "/contact"],
  ];

  static GetExperienceContent = (t: (key: string) => string): MediaItem[] => [
    new MediaItem(
      "https://www.kauz.ch/assets/imgs/logo/kim-inv.svg",
      null,
      null,
      "/projects?search=kauz",
      t('index.components.experiencesAriaLabels[0]'),
      "bg-[#1b2533] bgImg",
      "Kauz Website"
    ),
    new MediaItem(
      "/imgs/logos/magical-imagery.svg",
      null,
      null,
      "/projects?search=magical",
      t('index.components.experiencesAriaLabels[1]'),
      null,
      "Magical Imagery"
    ),
    new MediaItem(
      "https://young-talents-hackathon.ch/wp-content/uploads/2022/09/Hackathon_Logo_rgb.png",
      null,
      null,
      "/projects?search=hackathon",
      t('index.components.experiencesAriaLabels[2]'),
      "bg-[#1b2533] bgImg",
      "Young Talents Hackathon 2022"
    ),
    new MediaItem(
      "/imgs/logos/scavenger-hunt.svg",
      null,
      null,
      "/projects?search=scavenger",
      t('index.components.experiencesAriaLabels[3]'),
      null,
      "Scavenger-Hunt-Ionic-App"
    ),
  ];

  static GetFlipCards = (t: (key: string) => string): FlipCardItem[] => [
    new FlipCardItem("/imgs/flipCards/lucerne.jpg", t('about.components.flipCardsFrontTextes[0]')),
    new FlipCardItem("/imgs/flipCards/work.jpg", t('about.components.flipCardsFrontTextes[1]')),
    new FlipCardItem("/imgs/flipCards/violet.jpg", t('about.components.flipCardsFrontTextes[2]')),
    new FlipCardItem("/imgs/flipCards/food.jpg", t('about.components.flipCardsFrontTextes[3]')),
    new FlipCardItem("/imgs/flipCards/wolf.jpg", t('about.components.flipCardsFrontTextes[4]')),
    new FlipCardItem("/imgs/flipCards/winter.jpg", t('about.components.flipCardsFrontTextes[5]')),
    new FlipCardItem("/imgs/flipCards/water.jpg", t('about.components.flipCardsFrontTextes[6]')),
  ];

  static GetFrameWorksInfo = (): CarouselWord[] => [
    new CarouselWord("/imgs/logos/wordpress.svg", "WordPress", 0, null, "WordPress Logo"),
    new CarouselWord("/imgs/logos/dotnet.svg", "ASP .NET", 0, null, "ASP .NET Logo"),
    new CarouselWord("/imgs/logos/ionic.svg", "Ionic", 0, null, "Ionic Logo"),
    new CarouselWord("/imgs/logos/vue.svg", "VueJS", 0, null, "VueJS Logo"),
    new CarouselWord("/imgs/logos/tailwind.svg", "TailwindCSS", 0, null, "TailwindCSS Logo"),
  ];

  static GetHobbies = (t: (key: string) => string): MediaItem[] => [
    new MediaItem(
      "/imgs/hobbies/write.jpg",
      t('about.components.hobbies[0].title'),
      t('about.components.hobbies[0].text'),
      null,
      t('about.components.hobbies[0].linkAriaLabel'),
      null,
      t('about.components.hobbies[0].imageAltText')
    ),
    new MediaItem(
      "/imgs/hobbies/program.webp",
      t('about.components.hobbies[1].title'),
      t('about.components.hobbies[1].text'),
      null,
      t('about.components.hobbies[0].linkAriaLabel'),
      null,
      t('about.components.hobbies[1].imageAltText')
    ),
    new MediaItem(
      "/imgs/hobbies/gaming.webp",
      t('about.components.hobbies[2].title'),
      t('about.components.hobbies[2].text'),
      null,
      t('about.components.hobbies[0].linkAriaLabel'),
      null,
      t('about.components.hobbies[2].imageAltText')
    ),
    new MediaItem(
      "/imgs/hobbies/read.jpg",
      t('about.components.hobbies[3].title'),
      t('about.components.hobbies[3].text'),
      null,
      t('about.components.hobbies[0].linkAriaLabel'),
      null,
      t('about.components.hobbies[3].imageAltText')
    ),
  ];

  static GetTimelineItems = (t: (key: string) => string): TimelineItem[] => [
    new TimelineItem(
      new Date(2011, 0, 1), // Month is zero-based in JavaScript
      new Date(2020, 5, 27),
      t('experience.components.timelines[0].title'),
      t('experience.components.timelines[0].text')
    ),
    new TimelineItem(
      new Date(2020, 7, 19),
      new Date(2021, 6, 5),
      t('experience.components.timelines[1].title'),
      t('experience.components.timelines[1].text')
    ),
    new TimelineItem(
      new Date(2021, 1, 1),
      new Date(2025, 7, 1),
      t('experience.components.timelines[2].title'),
      t('experience.components.timelines[2].text')
    ),
    new TimelineItem(
      new Date(2021, 7, 19),
      new Date(2025, 6, 5),
      t('experience.components.timelines[3].title'),
      t('experience.components.timelines[3].text')
    ),
  ];

  static GetProjects = (t: (key: string) => string): ProjectMenuItem[] => [
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[0].title'),
      t('projects.components.projectMenuItems[0].text'),
      t('projects.components.projectMenuItems[0].moreInfoText'),
      ProjectStatus.Completed,
      "https://kauz.ch",
      null,
      null,
      [], // Classes
      [
        new MediaItem("/imgs/projects/kimWebsite/img1.jpg", null, null, null, null, null, t('projects.components.projectMenuItems[0].slides[0].imageAltText'), "/imgs/projects/kimWebsite/img1.jpg"),
        new MediaItem("/imgs/projects/kimWebsite/img2.jpg", null, null, null, null, null, t('projects.components.projectMenuItems[0].slides[1].imageAltText'), "/imgs/projects/kimWebsite/img2.jpg"),
        new MediaItem("/imgs/projects/kimWebsite/img3.jpg", null, null, null, null, null, t('projects.components.projectMenuItems[0].slides[2].imageAltText'), "/imgs/projects/kimWebsite/img3.jpg"),
      ],
      "" // ImageUrl is required
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[1].title'),
      t('projects.components.projectMenuItems[1].text'),
      t('projects.components.projectMenuItems[1].moreInfoText'),
      ProjectStatus.Completed,
      null,
      "https://github.com/cooleGruppe/Magical-Imagery",
      null,
      [],
      [
        new MediaItem("/imgs/projects/magicalImagery/img1.jpg", null, t('projects.components.projectMenuItems[1].slides[0].description'), null, null, null, t('projects.components.projectMenuItems[1].slides[0].imageAltText'), "/imgs/projects/magicalImagery/img1.jpg"),
        new MediaItem("/imgs/projects/magicalImagery/img2.jpg", null, t('projects.components.projectMenuItems[1].slides[1].description'), null, null, null, t('projects.components.projectMenuItems[1].slides[1].imageAltText'), "/imgs/projects/magicalImagery/img2.jpg"),
        new MediaItem("/imgs/projects/magicalImagery/img3.jpg", null, t('projects.components.projectMenuItems[1].slides[2].description'), null, null, null, t('projects.components.projectMenuItems[1].slides[2].imageAltText'), "/imgs/projects/magicalImagery/img3.jpg"),
        new MediaItem("/imgs/projects/magicalImagery/img4.jpg", null, t('projects.components.projectMenuItems[1].slides[3].description'), null, null, null, t('projects.components.projectMenuItems[1].slides[3].imageAltText'), "/imgs/projects/magicalImagery/img4.jpg"),
        new MediaItem("/imgs/projects/magicalImagery/img5.jpg", null, t('projects.components.projectMenuItems[1].slides[4].description'), null, null, null, t('projects.components.projectMenuItems[1].slides[4].imageAltText'), "/imgs/projects/magicalImagery/img5.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[2].title'),
      t('projects.components.projectMenuItems[2].text'),
      t('projects.components.projectMenuItems[2].moreInfoText'),
      ProjectStatus.InProgress,
      null,
      null,
      [
        "https://github.com/Egomann88/BlazorWebTemplate",
        "https://github.com/Egomann88/BlazorRazdenTemplate",
        "https://github.com/Egomann88/BlazorBlazoriseTailwindTemplate",
        "https://github.com/Egomann88/BlazorBlazoriseBootstrapTemplate",
      ],
      [],
      null, // Slides
      ""
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[3].title'),
      t('projects.components.projectMenuItems[3].text'),
      t('projects.components.projectMenuItems[3].moreInfoText'),
      ProjectStatus.Completed,
      null,
      "https://github.com/Egomann88/newHackathonDJMN",
      null,
      [],
      [
        new MediaItem("/imgs/projects/hackathon/img1.jpg", null, t('projects.components.projectMenuItems[3].slides[0].description'), null, null, null, t('projects.components.projectMenuItems[3].slides[0].imageAltText'), "/imgs/projects/hackathon/img1.jpg"),
        new MediaItem("/imgs/projects/hackathon/img2.jpg", null, t('projects.components.projectMenuItems[3].slides[1].description'), null, null, null, t('projects.components.projectMenuItems[3].slides[1].imageAltText'), "/imgs/projects/hackathon/img2.jpg"),
        new MediaItem("/imgs/projects/hackathon/img3.jpg", null, t('projects.components.projectMenuItems[3].slides[2].description'), null, null, null, t('projects.components.projectMenuItems[3].slides[2].imageAltText'), "/imgs/projects/hackathon/img3.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[4].title'),
      t('projects.components.projectMenuItems[4].text'),
      t('projects.components.projectMenuItems[4].moreInfoText'),
      ProjectStatus.Completed,
      null,
      null,
      null,
      [],
      [
        new MediaItem("/imgs/projects/scavengerHunt/img1.jpg", null, t('projects.components.projectMenuItems[4].slides[0].description'), null, null, null, t('projects.components.projectMenuItems[4].slides[0].imageAltText'), "/imgs/projects/scavengerHunt/img1.jpg"),
        new MediaItem("/imgs/projects/scavengerHunt/img2.jpg", null, t('projects.components.projectMenuItems[4].slides[1].description'), null, null, null, t('projects.components.projectMenuItems[4].slides[1].imageAltText'), "/imgs/projects/scavengerHunt/img2.jpg"),
        new MediaItem("/imgs/projects/scavengerHunt/img3.jpg", null, t('projects.components.projectMenuItems[4].slides[2].description'), null, null, null, t('projects.components.projectMenuItems[4].slides[2].imageAltText'), "/imgs/projects/scavengerHunt/img3.jpg"),
        new MediaItem("/imgs/projects/scavengerHunt/img4.jpg", null, t('projects.components.projectMenuItems[4].slides[3].description'), null, null, null, t('projects.components.projectMenuItems[4].slides[3].imageAltText'), "/imgs/projects/scavengerHunt/img4.jpg"),
        new MediaItem("/imgs/projects/scavengerHunt/img5.jpg", null, t('projects.components.projectMenuItems[4].slides[4].description'), null, null, null, t('projects.components.projectMenuItems[4].slides[4].imageAltText'), "/imgs/projects/scavengerHunt/img5.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[5].title'),
      t('projects.components.projectMenuItems[5].text'),
      t('projects.components.projectMenuItems[5].moreInfoText'),
      ProjectStatus.Unknown,
      null,
      "https://github.com/Egomann88/PSCopyFromWord2Word",
      null,
      [],
      [
        new MediaItem("/imgs/projects/wordHeaderReplacer/img1.jpg", null, null, null, null, null, t('projects.components.projectMenuItems[5].slides[0].imageAltText'), "/imgs/projects/wordHeaderReplacer/img1.jpg")
      ],
      ""
    ),
    new ProjectMenuItem(
      t('projects.components.projectMenuItems[6].title'),
      t('projects.components.projectMenuItems[6].text'),
      t('projects.components.projectMenuItems[6].moreInfoText'),
      ProjectStatus.Completed,
      null,
      "https://github.com/dominictosku/Mongo-Python",
      null,
      [],
      null, // Slides
      ""
    ),
  ];

  static GetContactCards = (): MediaItem[] => [
    new MediaItem(
      "/imgs/logos/discord-logo-white.svg",
      null,
      null,
      null,
      "Egomann88#9118"
    ),
    new MediaItem(
      "/imgs/logos/GitHub_Logo_White.png",
      null,
      null,
      "https://github.com/Egomann88",
      "Github"
    ),
    new MediaItem(
      "/imgs/logos/LI-Logo.png",
      null,
      null,
      "https://www.linkedin.com/in/ju-573795244",
      "Linkedin"
    ),
  ];

  static GetReferencesImages = (t: (key: string) => string): ImageReference[] => [
    new ImageReference(
      "/imgs/flipCards/lucerne.jpg",
      "B. Hochsprung",
      "https://pixabay.com/de/users/bea61-12517357/",
      "Pixabay",
      "https://pixabay.com/de/photos/europa-schweiz-luzern-stadt-7128531/",
      null,
      t('references.components.referencesImagesAltTexts[0]')
    ),
    new ImageReference(
      "/imgs/flipCards/work.jpg",
      null,
      null,
      "Pixabay",
      "https://www.pexels.com/de-de/foto/computer-c-code-276452/",
      null,
      t('references.components.referencesImagesAltTexts[1]')
    ),
    new ImageReference(
      "/imgs/flipCards/food.jpg",
      "the_food _shot_",
      "https://www.pexels.com/de-de/@the_food-_shot_-445040244/",
      "Pixabay",
      "https://www.pexels.com/de-de/foto/datei-aparmegiana-20426624/",
      null,
      t('references.components.referencesImagesAltTexts[2]')
    ),
    new ImageReference(
      "/imgs/flipCards/wolf.jpg",
      "Andrea Bohl",
      "https://pixabay.com/de/users/wildfaces-932734/",
      "Pixabay",
      "https://pixabay.com/de/photos/wolf-eckzahn-wald-raubtier-wild-1336229/",
      null,
      t('references.components.referencesImagesAltTexts[3]')
    ),
    new ImageReference(
      "/imgs/flipCards/winter.jpg",
      "Nathalie De Boever",
      "https://www.pexels.com/de-de/@nathy/",
      "Pixabay",
      "https://www.pexels.com/de-de/foto/schneebedeckte-gebirgszuge-unter-dem-weissen-himmel-1398049/",
      null,
      t('references.components.referencesImagesAltTexts[4]')
    ),
    new ImageReference(
      "/imgs/flipCards/water.jpg",
      null,
      null,
      "Pixabay",
      "https://www.pexels.com/de-de/foto/nahaufnahme-der-flasche-die-wasser-auf-glas-giesst-327090/",
      null,
      t('references.components.referencesImagesAltTexts[5]')
    ),
    new ImageReference(
      "https://www.kauz.ch/assets/imgs/logo/kim-inv.svg",
      null,
      null,
      "Kauz Informatik Medien AG",
      "https://kauz.ch",
      null,
      t('references.components.referencesImagesAltTexts[6]')
    ),
    new ImageReference(
      "https://young-talents-hackathon.ch/wp-content/uploads/2022/09/Hackathon_Logo_rgb.png",
      null,
      null,
      "Young Talents Hackathon 2022",
      "https://young-talents-hackathon.ch/",
      null,
      t('references.components.referencesImagesAltTexts[7]')
    ),
  ];

  static GetReferencesBrandLogos = (): MediaItem[] => [
    new MediaItem(
      "/imgs/logos/ionic.svg",
      null,
      "Ionic Brand",
      "https://ionic.io/about/brand",
      null,
      null,
      "ionic"
    ),
    new MediaItem(
      "/imgs/logos/dotnet.svg",
      null,
      "ASP.NET Core Brand",
      "https://github.com/dotnet/brand/tree/main/logo",
      null,
      null,
      "aspnetcore"
    ),
    new MediaItem(
      "/imgs/logos/tailwind.svg",
      null,
      "Tailwind CSS Brand",
      "https://tailwindcss.com/brand",
      null,
      null,
      "tailwindcss"
    ),
    new MediaItem(
      "/imgs/logos/vue.svg",
      null,
      "Vue.js Brand",
      "https://vuejs.org/",
      null,
      null,
      "vuejs"
    ),
    new MediaItem(
      "/imgs/logos/wordpress.svg",
      null,
      "WordPress Brand",
      "https://wordpress.org/about/logos/",
      null,
      null,
      "wordpress"
    )
  ];

  static GetReferencesContactBrandLogos = (): MediaItem[] => [
    new MediaItem(
      "/imgs/logos/discord-logo-white.svg",
      null,
      "Discord Brand",
      "https://discord.com/branding",
      null,
      "h-[110px]",
      "Discord-Tag"
    ),
    new MediaItem(
      "/imgs/logos/GitHub_Logo_White.png",
      null,
      "Github Brand",
      "https://github.com/logos",
      null,
      null,
      "Github-Logo"
    ),
    new MediaItem(
      "/imgs/logos/LI-Logo.png",
      null,
      "Linkedin Brand",
      "https://brand.linkedin.com/en-us",
      null,
      null,
      "Linkedin-Logo"
    )
  ];

  static GetReferencesHobbyCards = (t: (key: string) => string): MediaItem[] => [
    new MediaItem(
      "/imgs/hobbies/gaming.webp",
      t('references.components.referencesHobbyCards[0].title'),
      t('references.components.referencesHobbyCards[0].text'),
      "https://www.pinterest.com/pin/772226667335267334/",
      null,
      null,
      t('references.components.referencesHobbyCards[0].imageAltText'),
    ),
    new MediaItem(
      "/imgs/hobbies/program.webp",
      t('references.components.referencesHobbyCards[1].title'),
      t('references.components.referencesHobbyCards[1].text'),
      null,
      null,
      null,
      t('references.components.referencesHobbyCards[1].imageAltText'),
    ),
    new MediaItem(
      "/imgs/hobbies/read.jpg",
      t('references.components.referencesHobbyCards[2].title'),
      t('references.components.referencesHobbyCards[2].text'),
      null,
      null,
      null,
      t('references.components.referencesHobbyCards[2].imageAltText'),
    ),
    new MediaItem(
      "/imgs/hobbies/write.jpg",
      t('references.components.referencesHobbyCards[1].title'),
      t('references.components.referencesHobbyCards[1].text'),
      null,
      null,
      null,
      t('references.components.referencesHobbyCards[1].imageAltText'),
    ),
    new MediaItem(
      "/imgs/logos/magical-imagery.svg",
      t('references.components.referencesHobbyCards[3].title'),
      t('references.components.referencesHobbyCards[3].text'),
      null,
      null,
      null,
      t('references.components.referencesHobbyCards[3].imageAltText'),
    ),
    new MediaItem(
      "/imgs/logos/scavenger-hunt.svg",
      t('references.components.referencesHobbyCards[3].title'),
      t('references.components.referencesHobbyCards[3].text'),
      null,
      null,
      null,
      t('references.components.referencesHobbyCards[3].imageAltText'),
    ),
  ];
}
