import {
  MediaItem,
  FlipCardItem,
  CarouselWord,
  TimelineItem,
  ProjectMenuItem,
  ImageReference,
} from "#imports";

export class DataProvider {
  static GetNavBarLinks = (): [string, string][] => [
    ["Home", "/"],
    ["Über mich", "/about"],
    ["Erfahrung", "/experience"],
    ["Projekte", "/projects"],
    ["Kontakt", "/contact"],
  ];

  static GetExperienceContent = (): MediaItem[] => [
    new MediaItem(
      "https://www.kauz.ch/assets/imgs/logo/kim-inv.svg",
      null,
      null,
      "/projects?search=kauz",
      null,
      "bg-[#1b2533] bgImg",
      "Kauz Website"
    ),
    new MediaItem(
      "./imgs/logos/magical-imagery.svg",
      null,
      null,
      "/projects?search=magical",
      null,
      null,
      "Magical Imagery"
    ),
    new MediaItem(
      "https://young-talents-hackathon.ch/wp-content/uploads/2022/09/Hackathon_Logo_rgb.png",
      null,
      null,
      "/projects?search=hackathon",
      null,
      "bg-[#1b2533] bgImg",
      "Young Talents Hackathon 2022"
    ),
    new MediaItem(
      "./imgs/logos/scavenger-hunt.svg",
      null,
      null,
      "/projects?search=scavenger",
      null,
      null,
      "Scavenger-Hunt-Ionic-App"
    ),
  ];

  static GetFlipCards = (): FlipCardItem[] => [
    new FlipCardItem("./imgs/flipCards/lucerne.jpg", "Mein Wohnort"),
    new FlipCardItem("./imgs/flipCards/work.jpg", "Mein Beruf"),
    new FlipCardItem("./imgs/flipCards/violet.jpg", "Meine Lieblingsfarbe"),
    new FlipCardItem("./imgs/flipCards/food.jpg", "Mein Lieblingsessen"),
    new FlipCardItem("./imgs/flipCards/wolf.jpg", "Mein Lieblingstier"),
    new FlipCardItem("./imgs/flipCards/winter.jpg", "Meine Lieblingsjahreszeit"),
    new FlipCardItem("./imgs/flipCards/water.jpg", "Mein Lieblingsgetränk"),
  ];

  static GetFrameWorksInfo = (): CarouselWord[] => [
    new CarouselWord("./imgs/logos/wordpress.svg", "WordPress", 0, null, "WordPress Logo"),
    new CarouselWord("./imgs/logos/dotnet.svg", "ASP .NET", 0, null, "ASP .NET Logo"),
    new CarouselWord("./imgs/logos/ionic.svg", "Ionic", 0, null, "Ionic Logo"),
    new CarouselWord("./imgs/logos/vue.svg", "VueJS", 0, null, "VueJS Logo"),
    new CarouselWord("./imgs/logos/tailwind.svg", "TailwindCSS", 0, null, "TailwindCSS Logo"),
  ];

  static GetHobbies = (): MediaItem[] => [
    new MediaItem(
      "./imgs/hobbies/write.jpg",
      "Kreatives Schreiben",
      "Meine grösste Leidenschaft widmet sich dem kreativen Schreiben. Ich habe herausgefunden, dass das Verfassen und Ausdenken von Geschichten das ist, was mich persönlich am meisten erfüllt. Momentan schreibe ich nur kleinere Werke oder Konzepte.",
      null,
      null,
      null,
      "Kreatives Schreiben"
    ),
    new MediaItem(
      "./imgs/hobbies/program.webp",
      "Programmieren und Coden",
      "Programmieren ist ein Hobby, mit dem man seine Freizeit sinnvoll verbringen kann und das auch Teil des Berufs sein kann. Ich programmiere gerne das Frontend, aber auch die Backend-Logik von Websites. Die Sprachen, die ich benutze, sind C#, JS/TS, Python und leider auch PHP 😪.",
      null,
      null,
      null,
      "Programmieren und Coden"
    ),
    new MediaItem(
      "./imgs/hobbies/gaming.webp",
      "Gaming",
      "Ich bin das, was man als leidenschaftlichen Gamer bezeichnen würde, auch wenn diese Leidenschaft immer mehr in den Hintergrund gerät. Meine Lieblingsgenres sind RPGs, Hack'n'Slay und MMOs und glaube an die PC-Supremacy.",
      null,
      null,
      null,
      "Gaming"
    ),
    new MediaItem(
      "./imgs/hobbies/read.jpg",
      "Lesen",
      "Ein immer mehr aufkommendes Hobby ist das Lesen. Ich lese gerne Bücher, um meinen Wortschatz zu erweitern und um mich in andere Welten zu versetzen. Meine Lieblingsgenres sind Fantasy, Sci-Fi und Thriller.",
      null,
      null,
      null,
      "Lesen"
    ),
  ];

  static GetTimelineItems = (): TimelineItem[] => [
    new TimelineItem(
      new Date(2011, 0, 1), // Month is zero-based in JavaScript
      new Date(2020, 5, 27),
      "Obligatorische Schulzeit",
      "Obligatorische Schulzeit an der Primarschule und Sekundarschule in Luzern. Abschluss der Sekundarschule im Sommer 2020."
    ),
    new TimelineItem(
      new Date(2020, 7, 19),
      new Date(2021, 6, 5),
      "Zentrum für Brückenangebote (ZBA) Luzern",
      "Besuch des Zentrums für Brückenangebote (ZBA) in Luzern. Während dieser Zeit konnte ich meine schulischen Leistungen verbessern und mich auf die berufliche Ausbildung vorbereiten."
    ),
    new TimelineItem(
      new Date(2021, 1, 1),
      new Date(2025, 7, 1),
      "Berufliche Ausbildung als Informatiker Applikationsentwicklung (Kauz Informatik Medien AG)",
      "Berufliche Ausbildung als Informatiker Applikationsentwicklung bei der Kauz Informatik Medien AG in Ballwil. Während der Ausbildung wurde ich mit dem Google Workspace, sämtlichen Front- und Backendtechnologien, sowie der Konzeption und Umsetzung von Webapplikationen vertraut gemacht. Nahen Kundenkontakt gehörte ebenfalls zu meinen Aufgaben."
    ),
    new TimelineItem(
      new Date(2021, 7, 19),
      new Date(2025, 6, 5),
      "Berufsliche Ausbildung als Informatiker Applikationsentwicklung (BBZW Sursee)",
      "Während dem theoretischen Teil der beruflichen Ausbildung besuche ich das Berufsbildungszentrum für Wirtschaft und Informatik (BBZW) in Sursee. Dort habe ich neben den Grundlagen des Unterrichts, Kenntnisse über Microsoft Office erlangt."
    ),
  ];

  static GetProjects = (): ProjectMenuItem[] => [
    new ProjectMenuItem(
      "Kauz Website",
      "Die Kauz Website war ein Projekt zur Neugestaltung der Website der Kauz Informatik Medien AG. Ich habe unter anderem bei der Umsetzung des Designs geholfen.",
      "Dies war ein internes Projekt und zu meinen Aufgaben gehörte es, Gestaltungselemente umzusetzen, dabei war ich frei wie die Elemente aussehen sollten, solange Benutzerfreundlichkeit, Funktionalität und die Grundanforderungen gewährleistet waren.",
      ProjectStatus.Completed,
      "https://kauz.ch",
      null,
      null,
      [], // Classes
      [
        new MediaItem("./imgs/projects/kimWebsite/img1.jpg", null, null, null, null, null, "Projektbild 1", "./imgs/projects/kimWebsite/img1.jpg"),
        new MediaItem("./imgs/projects/kimWebsite/img2.jpg", null, null, null, null, null, "Projektbild 2", "./imgs/projects/kimWebsite/img2.jpg"),
        new MediaItem("./imgs/projects/kimWebsite/img3.jpg", null, null, null, null, null, "Projektbild 3", "./imgs/projects/kimWebsite/img3.jpg"),
      ],
      "" // ImageUrl is required
    ),
    new ProjectMenuItem(
      "Magical Imagery",
      "Magical Imagery war ein Pilotprojekt im Rahmen eines Moduls meiner Ausbildung und sollte simulieren, wie man ein echtes Projekt plant und umsetzt. Es handelt sich um einen Online-Shop für Fotografie und Kunst, mit dem eine einfache Plattform für Künstler geschaffen werden soll, um ihre Werke zu verkaufen.",
      "Ein Online-Shop der sowohl privaten als auch geschäftliche Bedürfnisse abdecken sollte. Die Herausforderung bestand darin, eine einfache und intuitive Benutzeroberfläche zu schaffen, die sowohl für Künstler als auch für Kunden einfach zu bedienen ist. Die Beweggründe für diese Idee war es, Künstlern das leben zu vereinfachen und sie auf unserer Plattform ihre Werke ohne die rechtlichen Hürden eines eigenen Shops zu verkaufen. Freiheit für KI generierte Kunstwerke wollten wir auch bieten.",
      ProjectStatus.Completed,
      null,
      "https://github.com/cooleGruppe/Magical-Imagery",
      null,
      [],
      [
        new MediaItem("./imgs/projects/magicalImagery/img1.jpg", null, "Startseite", null, null, null, "Projektbild 1", "./imgs/projects/magicalImagery/img1.jpg"),
        new MediaItem("./imgs/projects/magicalImagery/img2.jpg", null, "Detailiertes Produkt", null, null, null, "Projektbild 2", "./imgs/projects/magicalImagery/img2.jpg"),
        new MediaItem("./imgs/projects/magicalImagery/img3.jpg", null, "Lizenzmodelle", null, null, null, "Projektbild 3", "./imgs/projects/magicalImagery/img3.jpg"),
        new MediaItem("./imgs/projects/magicalImagery/img4.jpg", null, "Warenkorb", null, null, null, "Projektbild 4", "./imgs/projects/magicalImagery/img4.jpg"),
        new MediaItem("./imgs/projects/magicalImagery/img5.jpg", null, "Produkt erstellen", null, null, null, "Projektbild 5", "./imgs/projects/magicalImagery/img5.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      "Blazor Templates",
      "Die Blazor Templates sind eine kleine Anreihung an Vorlagen für Blazor Web Projekte. Sie sind für Entwickler gedacht, die schnell und einfach eine Vorlage für ihre Projekte suchen.",
      "Alle Blazor Vorlagen bestehen aus derselben Struktur, welche die Datenbank-Logik und die Benutzeroberfläche trennt; geschrieben als Blazor Web-App. Im Moment gibt es 4 Vorlagen: Eine normale Blazor Web-App, die normale mit Radzen als UI-Libary und zwei weitere normale mit Blazorise als UI-Libary; eine mit TailwindCSS und die andere mit Bootstrap.",
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
      "Hackathon",
      "2022 habe ich zusammen mit drei Kollegen an dem Young Talents Hackathon, organisiert von der UMB AG und der ICT-Berufsbildung Zentralschweiz, teilgenommen. Wir sollten für die HSLU einen Ferienplanner für die Angestellten entwickeln.",
      "Die effektive Umsetzung war eher mager; es war unser erster Versuch eine Web-App zu entwickeln. Schlussendlich haben wir eine einfache Web-App mit VueJs als Frontend und .Net als REST-Api entwickelt und präsentiert. Viel ist nicht daraus geworden, aber es war eine interessante Erfahrung.",
      ProjectStatus.Completed,
      null,
      "https://github.com/Egomann88/newHackathonDJMN",
      null,
      [],
      [
        new MediaItem("./imgs/projects/hackathon/img1.jpg", null, "Login", null, null, null, "Projektbild 1", "./imgs/projects/hackathon/img1.jpg"),
        new MediaItem("./imgs/projects/hackathon/img2.jpg", null, "Kalender", null, null, null, "Projektbild 2", "./imgs/projects/hackathon/img2.jpg"),
        new MediaItem("./imgs/projects/hackathon/img3.jpg", null, "Beantragte Ferien", null, null, null, "Projektbild 3", "./imgs/projects/hackathon/img3.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      "Scavenger-Hunt-Ionic-App",
      "Die Scavenger-Hunt ist wie man von dem Namen ableiten kann, eine Schnitzeljagd-App. Diese kleine App wurde von mir und zwei Kollegen im Rahmen eines ÜKs entwickelt.",
      "Die App ist in Ionic und Angular geschriebenen. In der App kann man Schnitzeljagten mit insgesamt 6 Aufgaben machen, in dem Kartoffeln verteilt werden, wenn man zu viel Zeit bei einem Auftrag verbraucht. Alle Schnitzeljagten kann man in einer Rangliste einsehen. Die Daten werden im lokalen Speicher des Gerätes gespeichert, dazu wurden damals zur bearbeitung der ÜKs die Leistungen der Spieler in einer Google Tabelle gespeichert. Der Source-Code ist derzeit nicht öffentlich verfügbar.",
      ProjectStatus.Completed,
      null,
      null,
      null,
      [],
      [
        new MediaItem("./imgs/projects/scavengerHunt/img1.jpg", null, "Startseite und Rangliste", null, null, null, "Projektbild 1", "./imgs/projects/scavengerHunt/img1.jpg"),
        new MediaItem("./imgs/projects/scavengerHunt/img2.jpg", null, "1. Aufgabe: Sensor", null, null, null, "Projektbild 2", "./imgs/projects/scavengerHunt/img2.jpg"),
        new MediaItem("./imgs/projects/scavengerHunt/img3.jpg", null, "2. Aufgabe: Laufen", null, null, null, "Projektbild 3", "./imgs/projects/scavengerHunt/img3.jpg"),
        new MediaItem("./imgs/projects/scavengerHunt/img4.jpg", null, "4. Aufgabe: Schütteln bzw. Drehen", null, null, null, "Projektbild 4", "./imgs/projects/scavengerHunt/img4.jpg"),
        new MediaItem("./imgs/projects/scavengerHunt/img5.jpg", null, "Ende und Auswertung", null, null, null, "Projektbild 5", "./imgs/projects/scavengerHunt/img5.jpg"),
      ],
      ""
    ),
    new ProjectMenuItem(
      "Powershell Word-Header replacer",
      "Das Powershell Word-Header replacer ist ein kleines Skript, welches ein Kollege und ich in unserem 1. Lehrjahr innerhalb von 3 Tagen entwickelt haben. Ziel des Skripts war es die Kopf und Fusszeilen von Word-Dokumenten mit dennen von einem anderen Dokument zu ersetzen.",
      "Eine Lehrperson hatte uns gefragt, ob wir ein solches Skript entwickeln könnten, da sie es für ihre Arbeit benötigte und PowerShell war als Sprache vorgegeben. Das Skript benutzt die eingebaute Word API von Microsoft und kann die Kopf- und Fusszeilen von Word-Dokumenten ersetzen, aber leider funktioniert es nicht immer. Ich habe über die Jahre viele Versuche unternommen, um das Skript zu verbessern, aber diese Versuche haben keine Früchte getragen.",
      ProjectStatus.Unknown,
      null,
      "https://github.com/Egomann88/PSCopyFromWord2Word",
      null,
      [],
      [
        new MediaItem("./imgs/projects/wordHeaderReplacer/img1.jpg", null, null, null, null, null, "Projektbild 1", "./imgs/projects/wordHeaderReplacer/img1.jpg")
      ],
      ""
    ),
    new ProjectMenuItem(
      "Mongo Python",
      "Mongo Python heisst eigentlich Jukebox und ist ein Abschlussprojekt eines Moduls, entwicklet von mir und einem Kollegen. Es ist eine kleine Web-App, die Musik abspielen kann und die Musik in einer MongoDB speichert.",
      "Ziel des Projekts war es, eine Web-App zu entwickeln, die Musik abspielen kann, diese in Playlist speichern kann und die Musik in einer MongoDB speichert. Die Web-App sollte auch eine Benutzeroberfläche haben, um die Musik zu verwalten. Umgesetzt wurde das Projekt mit VueJs als Frontend und Python als Backend. Die Datenbank läuft in einem Docker-Container.",
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
      "./imgs/logos/discord-logo-white.svg",
      null,
      null,
      null,
      "Egomann88#9118"
    ),
    new MediaItem(
      "./imgs/logos/GitHub_Logo_White.png",
      null,
      null,
      "https://github.com/Egomann88",
      "Github"
    ),
    new MediaItem(
      "./imgs/logos/LI-Logo.png",
      null,
      null,
      "https://www.linkedin.com/in/ju-573795244",
      "Linkedin"
    ),
  ];

  static GetReferencesImages = (): ImageReference[] => [
    new ImageReference(
      "/imgs/flipCards/lucerne.jpg",
      "B. Hochsprung",
      "https://pixabay.com/de/users/bea61-12517357/",
      "Pixabay",
      "https://pixabay.com/de/photos/europa-schweiz-luzern-stadt-7128531/",
      null,
      "Lucerne from Pixabay"
    ),
    new ImageReference(
      "/imgs/flipCards/work.jpg",
      null,
      null,
      "Pixabay",
      "https://www.pexels.com/de-de/foto/computer-c-code-276452/",
      null,
      "Programming from Pixabay"
    ),
    new ImageReference(
      "/imgs/flipCards/food.jpg",
      "the_food _shot_",
      "https://www.pexels.com/de-de/@the_food-_shot_-445040244/",
      "Pixabay",
      "https://www.pexels.com/de-de/foto/datei-aparmegiana-20426624/",
      null,
      "Lasagne from Pixabay"
    ),
    new ImageReference(
      "/imgs/flipCards/wolf.jpg",
      "Andrea Bohl",
      "https://pixabay.com/de/users/wildfaces-932734/",
      "Pixabay",
      "https://pixabay.com/de/photos/wolf-eckzahn-wald-raubtier-wild-1336229/",
      null,
      "Wolf from Pixabay"
    ),
    new ImageReference(
      "/imgs/flipCards/winter.jpg",
      "Nathalie De Boever",
      "https://www.pexels.com/de-de/@nathy/",
      "Pixabay",
      "https://www.pexels.com/de-de/foto/schneebedeckte-gebirgszuge-unter-dem-weissen-himmel-1398049/",
      null,
      "Winter from Pixabay"
    ),
    new ImageReference(
      "/imgs/flipCards/water.jpg",
      null,
      null,
      "Pixabay",
      "https://www.pexels.com/de-de/foto/nahaufnahme-der-flasche-die-wasser-auf-glas-giesst-327090/",
      null,
      "Water from Pixabay"
    ),
    new ImageReference(
      "https://www.kauz.ch/assets/imgs/logo/kim-inv.svg",
      null,
      null,
      "Kauz Informatik Medien AG",
      "https://kauz.ch",
    ),
    new ImageReference(
      "https://young-talents-hackathon.ch/wp-content/uploads/2022/09/Hackathon_Logo_rgb.png",
      null,
      null,
      "Young Talents Hackathon 2022",
      "https://young-talents-hackathon.ch/",
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
      "Github Logo"
    ),
    new MediaItem(
      "/imgs/logos/LI-Logo.png",
      null,
      "Linkedin Brand",
      "https://brand.linkedin.com/en-us",
      null,
      null,
      "Linkedin Logo"
    )
  ];

  static GetReferencesHobbyCards = (): MediaItem[] => [
    new MediaItem(
      "/imgs/hobbies/gaming.webp",
      "The Witcher 3 Wallpaper",
      "Ein freies Bild von Luiz Eduardo auf Pinterest.",
      "https://www.pinterest.com/pin/772226667335267334/",
      null,
      null,
      "Image from witcher 3"
    ),
    new MediaItem(
      "/imgs/hobbies/program.webp",
      "Mit KI generiert",
      "Das Bild wurde auf meinen Auftrag von GPT-4 DALL·E generiert.",
      null,
      null,
      null,
      "AI generated Image about programming"
    ),
    new MediaItem(
      "/imgs/hobbies/read.jpg",
      "Buchlampe",
      "Ein freies Bild von jadeharmony1111 auf Pintrest.",
      "https://www.pinterest.com/pin/641411171899245887/",
      null,
      null,
      "Image of an open Book"
    ),
    new MediaItem(
      "/imgs/hobbies/write.jpg",
      "Mit KI generiert",
      "Das Bild wurde auf meinen Auftrag von GPT-4 DALL·E generiert.",
      null,
      null,
      null,
      "Image of a Book"
    ),
    new MediaItem(
      "/imgs/logos/magical-imagery.svg",
      "Mit KI generiert",
      "Das Bild wurde auf meinen Auftrag von recraft ai generiert.",
      null,
      null,
      null,
      "Magical Imagery Logo"
    ),
    new MediaItem(
      "/imgs/logos/scavenger-hunt.svg",
      "Mit KI generiert",
      "Das Bild wurde auf meinen Auftrag von recraft ai generiert.",
      null,
      null,
      null,
      "Scavenger-Hunt Logo"
    ),
  ];
}
