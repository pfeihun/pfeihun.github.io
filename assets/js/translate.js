var portfolio = {}

portfolio.i18n = {
//magyar adatok
    "hu-HU":
    {
        "mainTitle" : "Pfeiffer Zoltán Junior Front-End fejlesztő",
       
        //menu
        "debut" : 'Bemutatkozás',
        "about" : "Rólam",
        
        "skill": "Jártasságok",
        "portfolio" : "Portfolió",
        "contact" : "Kapcsolat",
        "more" : "Több",
        "hobbi" : "Hobbik és egyéb",
        "dark" : "Sötét",
        "light" : "Világos", 
        "up" : "Fel!",
        "menu": "Menü",
        
        //section_Top
        "slogen" : '"Mert Problémák nincsenek <strong> csak megoldások! </strong>"',
        "motivation": "Motiváció",
        "workTogether" : 'Dolgozzunk Együtt',
       
        //section_1
        "plan" : "Tervezés",
        "planParagraph" : "Új weblap? A régit fel javítani? Akadálymentesíteni? Keressen bizalommal!",
        "develop" : "Fejlesztés",
        "developParagraph":" Fejlesztés HTML5, WAI-ARIA, CSS3, Javascript, SQL, PhP, Python használatával",
        "workFrame" : "Keretrendszerek",
        "problem" : " Nem probléma!",
        
        //section_3
        'graphic': '<h3>Grafika</h3><p>Vektor/ Raszter grafikai munkák tervezése, kivitelezése Adobe Photoshop, Adobe Illustrator vagy CorelDraw segítségével</p>',
        'creative': '<h3>Kreativitás</h3><p>Lergyen grafikai munka, webfejlesztés feltalálom magam minden helyzetben! És a Google a legjobb barátom!</p>',
        'frontEnd': '<h3>FrontEnd</h3><p>HTML5, CSS3, Bootstrap,  JavaScript, </p>',
        'backEnd' : '	<h3>BackEnd</h3><p>PHP, Python, SQL</p>',
       
        //section_4
        'techs': 'Elérhető technikák:',
        'unlocked': 'Feloldva:',
        'graphicMedia': 'Grafika, Média',
        'locked' : 'Zárolt:',

        //section_5
        'portfolioIntroduction' : '2009-től több projektben vettem részt, mint kivitelező, segítségnyújtó:',
        //js api projekt
        'js-api':'<h3><a href="./weather/index.html" target="blank">Projektfeladat</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2020 Október</span></div><p>A harmadik Projektfeladat a ProgramozásKarriernél (Iskola)</p><p>HTML5, CSS3, Javascript, API</p>',
        //klima_projekt
        'klima' : '<h3><a href="./recycling/index.html" target="blank">Projektfeladat</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2020 Július</span></div><p>Az első Projektfeladat a ProgramozásKarriernél (Iskola)</p><p>HTML5, CSS3, Bootstrap</p>',
        //keletifront
        'keletiFront' : '<h3>Facebook logo tervezés</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2019 Január</span></div><p>Egy Airsoft szaküzletnek tervezve</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3>Emléktábla tervezés</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2018 Április</span></div><p>A 150 éves Esztergomi tűzoltóság rendezvény részére tervezve</p><p>CorelDraw Vektor Grafika</p>',
        //plakett
        'plakett' : '<h3>Plakett tervezés</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2018 Április</div><p>A 150 éves Esztergomi tűzoltóság részére tervezve</p><p>Adobe Photoshop Raszter Grafika</p>',
        //agrarElet
        'agrar' : '<h3>Agrár Élet Magazin</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2016 Szeptember </div><p>Meglévő weboldal továbbfejlesztése, keretrendszer frissítés, Grafikai munkák</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3>Tűzoltóság címer</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2015 Április </div><p>A helyi Önkéntes tűzoltóság részére Tervezett címer</p><p>Adobe Photoshop Raszter Grafika</p>',
        //vitézekLogo
        'vitezek' : '<h3>Esztergomi Vitézek Címer</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2015 Március </div><p>Az Esztergomi Vitézek Rugby csapat részére tervezett logo</p><p>Adobe Photoshop Vektor Grafika</p>',
        //Thalia
        'thalia': '<h3>Thália Tanoda Budapest (Színművészeti Akadémia)</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2014 - 2015</span></div><p>Weboldal Karbantartás, új funkciók telepítése, áttervezése, Galéria javítása, képek retusálása</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3>Személyi Weboldal</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2012 Február</span></div><p>Weboldal és blog fejlesztése, grafikai elemek elkészítése, dokumentáció illetve felhasználói dokumentumok írása</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3>DRH-Norway</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2010 Február</span></div><p>Meglévő weboldal továbbfejlesztése, és kisebb grafikai módosítások készítése. Jogosultság kezelés</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3>Garancstető lakópark</i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2009 Július</div><p>Weboldal fejlesztése, jogosultságok kiosztása, dokumentáció és felhasználói dokumentumok megírása prezentálása.</p><p>HTML, CSS, Flash, Joomla!</p>',
        
        //section_6
        "contactParagraph": "Küldjön Üzenetet, vagy keressen meg egyébb módon:",
        "contactH" : "Emailban:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="_replyto" placeholder="Email cim..." class="contact-email form-control" id="contact-email" required>',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="_subject" placeholder="Tárgy..." class="contact-subject form-control" id="contact-subject" required>' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Üzenet</label><textarea name="message" placeholder="Üzenet..." class="contact-message form-control" id="contact-message" required></textarea>',
        "contactH" : "Emailban:",
        "contactBtn": "Küldés!",
        "findMe" : "Itt is megtalál:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> Lakhely: Neuenhof, Aargau, Svájc',
        //footer
        'summ' : '<p>&copy; Pfeiffer Zoltán 2020</p><p>A weboldal Összesen:  <i class="fas fa-mug-hot"></i> 50 csésze kávé, és sok sok sor HTML, CSS, és JS!  </p>',
    },
//német adatok
    "de-CH":
    {
        "mainTitle" : "Zoltán Pfeiffer Junior Front-End Entwickler",
       
        //menu
        "debut" : 'Vorstellung',
        "about" : "Über",
        
        "skill": "Erfahrungen",
        "portfolio" : "Portfolio",
        "contact" : "Kontakt",
        "more" : "Mehr",
        "hobbi" : "Hobbis und mehr",
        "dark" : "Dunkel",
        "light" : "Licht", 
        "up" : "Nach oben!",
       
        //section_Top
        "menu": "Menu",
        "slogen" : '"Ich kenne keine Probleme, nur <strong>Lösungen!</strong>"',
        "motivation" : "Motivation",
        "workTogether" : "Lasst uns zusammen arbeiten!",
        
        //section_1
        "plan" : "Planen",
        "planParagraph" : "Neue webseite? Alte webseite verbessern? Verbesserung von Webseiten um sie für Menschen mit Sehbehinderung anzupassen (WAI-ARIA)? Schreiben Sie mich an!",
        "develop" : "Entwicklen",
        "developParagraph":"Entwicklung mit HTML5, CSS3, Javascript, SQL, PhP, Python",
        "workFrame" : "Content Management Systemen",
        "problem" : " Kein Problem!",

        //section_3
        'graphic': '<h3>Grafik</h3><p>Vector/ Raster grafische Arbeitsplanung, Verarbeitung mit Hilfe von Adobe Photoshop, Adobe Illustrator oder CorelDraw</p>',
        'creative': '<h3>Kreativität</h3><p>Ob Grafikerarbeit, Webentwicklung Ich werde lösungen finden in allen Situationen! Und Google ist mein beste Freund!</p>',
        'frontEnd': '<h3>FrontEnd</h3><p>HTML5, CSS3, Bootstrap,  JavaScript, </p>',
        'backEnd' : '	<h3>BackEnd</h3><p>PHP, Python, SQL</p>',

        //section_4
        'techs': 'Verfügbare Techniken:',
        'unlocked': 'Freigeschaltet:',
        'graphicMedia': 'Grafik, Media',
        'locked' : 'Gesperrt:',

        //section_5
        'portfolioIntroduction' : 'Seit 2009 war ich als Auftragnehmer und Helfer an mehreren Projekten beteiligt. Eine Vorschau:',
        //js api projekt
        'js-api':'<h3><a href="./weather/index.html" target="blank">Projekt Aufgabe</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>October 2020</span></div><p>Die dritte Projektaufgabe bei Programozáskarrier (Schule)</p><p>HTML5, CSS3, Javascript, API</p>',
        //klima_projekt
        'klima' : '<h3><a href="./recycling/index.html" target="blank">Projekt Aufgabe</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Juli 2020</span></div><p>Die erste Projektaufgabe bei Programozáskarrier (Schule)</p><p>HTML5, CSS3, Bootstrap</p>',
        //KeletiFront
        'keletiFront' : '<h3>Facebook Logo Design</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Januar 2019</span></div><p>Designed für ein Airsoft Spezialitätengeschäft</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3>Gedenktafel Design</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>April 2018</span></div><p>Entworfen für die 150 Jahre alte Veranstaltung der Feuerwehr Esztergom </p><p>CorelDraw Vector Grafik</p>',
        //plakett
        'plakett' : '<h3>Plakette Design</a> </h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2018</div><p>Entworfen für die 150 Jahre alte Veranstaltung der Feuerwehr Esztergom</p><p>Adobe Photoshop Raster Grafik</p>',
        //agrarElet
        'agrar' : '<h3>Agrár Élet Magazin</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>September 2016</div><p>Aktualisieren einer vorhandenen Website, Aktualisieren eines Frameworks, Grafik design aktualisieren</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3>Wappen für die Freiwillige Feuerwehr</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2015</div><p>Designed für die örtliche freiwillige Feuerwehr</p><p>Adobe Photoshop Raster Grafik</p>',
        //vitézekLogo
        'vitezek' : '<h3>Wappen für Esztergomi Vitézek</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>März 2015</div><p>Designed für Esztergomi Vitézek Rugby Mannschaft</p><p>Adobe Photoshop Vector Grafik</p>',
        //Thalia
        'thalia': '<h3>Thália Tanoda Budapest (Akademie der darstellenden Künste)</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2013 - 2015</span></div><p>Website-Wartung, Installation neuer Funktionen, Neugestaltung, Reparatur der Galerie, retuschieren von Bildern</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3>Persönliche Website </h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Februar 2012</span></div><p>Website- und Blog-Entwicklung, Erstellung grafischer Elemente, Verfassen von Dokumentationen und Benutzerdokumenten</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3>DRH-Norway</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Februar 2010</span></div><p>Aktualisieren einer vorhandenen Website und Vornehmen geringfügiger grafischer Änderungen. Zugriffsverwaltung</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3>Garancstető Wohnpark</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>Juli 2009</div><p>Website Entwicklung, Erstellung grafischer Elemente, Verfassen von Dokumentationen und Benutzerdokumenten</p><p>HTML, CSS, Flash, Joomla!</p>',

        //section_6
        "contactParagraph": "Senden Sie eine Nachricht oder suchen Sie auf andere Weise nach mir:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="_replyto" placeholder="E-Mail-Addresse" class="contact-email form-control" id="contact-email" required>',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Thema</label><input type="text" name="_subject" placeholder="Thema" class="contact-subject form-control" id="contact-subject" required>' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Nachricht</label><textarea name="message" placeholder="Nachricht..." class="contact-message form-control" id="contact-message" required></textarea>',
        "contactH" : "in E-mail:",
        "contactBtn": "Senden!",
        "findMe" : "Hier finden Sie mich auch:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> Wohnsitz: Neuenhof, Aargau, Schweiz',
        //footer
        'summ' : '<p>&copy; Zoltán Pfeiffer 2020</p><p>Diese Webseite hat insgesamt:  <i class="fas fa-mug-hot"></i> 50 tassen Kaffe gebraucht, und mehr und mehr reihe HTML, CSS, und JS</p>',

   },
//angol adatok
    "en-EN":
    {
        "mainTitle" : "Zoltán Pfeiffer Junior Front-End developer",
       
        //menu
        "debut" : ' Introduction',
        "about" : "About",
        
        "skill": "Experience",
        "portfolio" : "Portfolio",
        "contact" : "Contact",
        "more" : "More",
        "hobbi" : "Hobbis and more",
        "dark" : "Dark",
        "light" : "Light", 
        "up" : "Top!",
        "menu": "Menu",
        
        //sectionTop
        "slogen" : '"There are no problems, only <strong>solutions!</strong>"',
        "motivation" : "Motivation",
        "workTogether" : "Let's work together!",
       
        //section_1
        "plan" : "Planning",
        "planParagraph" : "New website? Old site updating? Web content and Web applications more accessible to people with disabilities? Send a massage!",
        "develop" : "Development",
        "developParagraph":"Development using HTML5, CSS3, Javascript, SQL, PhP, Python",
        "workFrame" : "Content Management Systems",
        "problem" : "No problem!",
      
        //section_3
        'graphic': '<h3>Graphic</h3><p>Vector/ Raster graphic works design and implementation with the help of Adobe Photoshop, Adobe Illustrator or CorelDraw</p>',
        'creative': '<h3>Creativity</h3><p>Let it be graphic design, webdevelopment I will invent my self in every situation! And Google is my best friend!</p>',
        'frontEnd': '<h3>FrontEnd</h3><p>HTML5, CSS3, Bootstrap,  JavaScript, </p>',
        'backEnd' : '	<h3>BackEnd</h3><p>PHP, Python, SQL</p>',
        
        //section_4
        'techs': 'Available techniques:',
        'unlocked': 'Unlocked:',
        'graphicMedia': 'Graphic, Media',
        'locked' : 'Locked:',

        //section_5
        'portfolioIntroduction' : 'Since 2009 I have been involved in several projects as a contractor and helper. A preview:',
        //js api projekt
        'js-api':'<h3><a href="./weather/index.html" target="blank">Projekt task</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>October 2020</span></div><p>The third projekt task at Programozáskarrier (School)</p><p>HTML5, CSS3, Javascript, API</p>',
        //klima_projekt
        'klima' : '<h3><a href="./recycling/index.html" target="blank">Projekt task</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>July 2020</span></div><p>The first projekt task at Programozáskarrier (School)</p><p>HTML5, CSS3, Bootstrap</p>',
        //keletifront
        'keletiFront' : '<h3>Facebook logo Design</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>January 2019</span></div><p>Designed for a speciality store</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3>Memorial plaque</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>April 2018</span></div><p>Designed for the 150 year old Esztergom Fire Brigade event</p><p>CorelDraw Vector graphic</p>',
        //plakett
        'plakett' : '<h3>Plaque Design</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2018</div><p>Designed for the 150 year old Esztergom Fire Brigade event</p><p>Adobe Photoshop Raster Graphik</p>',
        //agrarElet
        'agrar' : '<h3>Agrár Élet Magazin</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>September 2016</div><p>Updating an existing website, updating a framework, Graphik design update</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3>Coat of arms of the volunteer fire department</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2015</div><p>Designed coat of arms of the local volunteer fire department</p><p>Adobe Photoshop Raster Graphik</p>',
        //vitézekLogo
        'vitezek' : '<h3>Coat of arms of Esztergomi Vitézek</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>March 2015</div><p>Designed coat of arms of the Esztergomi Vitézek Rugby team</p><p>Adobe Photoshop Vector Graphic</p>',
        //Thalia
        'thalia': '<h3>Thália Tanoda Budapest (Academy of Performing Arts)</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2013 - 2015</span></div><p>Website Maintenance, installing new features, redesigning, repairing the gallery, retouching images</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3>Personal Website</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>February 2012</span></div><p>Website and blog development, creation of graphic elements, writing of documentation and user documents</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3>DRH-Norway</h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>February 2010</span></div><p>Upgrading an existing website and making minor graphic changes. Access management</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3>Garancstető residental park</h3><div class="section-5-box-date"><i class="far fa-calendar"></i>July 2009</div><p>Website development, creation of graphic elements, writing of documentation and user documents</p><p>HTML, CSS, Flash, Joomla!</p>',

        //section_6
        "contactParagraph": "Send a Message or other way find me:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="_replyto" placeholder="e-mail address..." class="contact-email form-control" id="contact-email" required>',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="_subject" placeholder="Subject..." class="contact-subject form-control" id="contact-subject" required>',
        "contact-message" : '<label class="sr-only" for="contact-message">Message</label><textarea name="message" placeholder="Message..." class="contact-message form-control" id="contact-message" required></textarea>',
        "contactH" : "in email:",
        "contactBtn": "Sending!",
        "findMe" : "You can find it here too:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> residence: Neuenhof, Aargau, Switzerland',
        //footer
        'summ' : '<p>&copy; Zoltán Pfeiffer 2020</p><p>This Webseite all in all:  <i class="fas fa-mug-hot"></i> 50 cup Coffee, and lots of rows of HTML, CSS, and JS!  </p>',

    }
}
const langBtn = document.querySelector(".langWrap");
const link = document.querySelectorAll("a.language");
let siteLang = navigator.language;
// check and convert site language

if(siteLang == "hu"){
  siteLang = "hu-HU";
}else if( siteLang == "de-DE"){
siteLang = "de-CH";
}else if (siteLang == "en-US"){
siteLang = "en-EN";
}else{
  siteLang = "en-EN"
};

if (siteLang != "#hu") {
  for (let node of document.querySelectorAll("[data-i18n]")) {
    node.innerHTML = portfolio.i18n[siteLang][node.dataset.i18n];
  }
      };

//language selector button remove and add active class
link.forEach((el) => {
  el.addEventListener("click", () => {
    langBtn.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    //Attribute changer
    var attr = el.getAttribute("hreflang");
    //Menu variables data change - Language element
    for (let node of document.querySelectorAll("[data-i18n]")) {
      node.innerHTML = portfolio.i18n[attr][node.dataset.i18n];
    }
  });
});
