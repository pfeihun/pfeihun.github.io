var portfolio = {}

portfolio.i18n = {
//magyar adatok
    "hu":
    {
        "mainTitle" : "Pfeiffer Zoltán Szabadúszó",
       
        //menu
        "debut" : 'Bemutatkozás',
        "about" : "Rólam",
        "timeline": "Munkahelyek és Iskolák",
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
       
        //section_2
        'programozaskarrier' : '<h4>Programozás Karrier</h4><i class="fas fa-graduation-cap"></i><h5>(2020)</h5><p><strong>Webfejlesztő FrontEnd</strong></p>',
        'dominos' : '<h4>Dominos Pizza Dietikon</h4><i class="fas fa-industry"></i><h5>(2018- jelenleg)</h5><p><strong>Futár, insider, 2019-től Műszakvezető</strong></p>',
        'esztergom' : '<h4>Tűzoltó Parancsnokság Esztergom</h4><i class="fas fa-industry"></i><h5>(2013 - 2018) </h5><p><strong> Beosztott Tűzoltó, 2015- Híradó ügyeletes, Csővezető, 2017- Grafikus </strong></p><p class="underline">Elismerések:</p><p>2013-as Dunai Árvíz - Díszparancs</p><p>2014 Hősies Helytállásért Elismerés</p>',
        'piliscsaba' : '<h4>Önkéntes Tűzoltóság Piliscsaba</h4><i class="fas fa-industry"></i><h5>(2014 - 2018)</h5><p><strong> Raj parancsnok,  grafikus, webfejlesztő</strong></p>',
        'drh' : '<h4>DRH Norway</h4><i class="fas fa-industry"></i><h5>(2012)</h5><p><strong>grafikus, webfejlesztő,</strong></p>',
        'ecotech' : '<h4>Ecotech nonprofit Zrt.</h4><i class="fas fa-industry"></i><h5>(2011 - 2012)</h5><p><strong>grafikus, webfejlesztő, videó vágó</strong></p>',
        'gkprojekt' : '<h4>GK-Projekt</h4><i class="fas fa-industry"></i><h5>(2009 - 2010)</h5><p><strong>Webfejlesztő</strong></p>',
        'duf' : '<h4>Dunaújvárosi Főiskola Kommunikáció és Médiatudomány Tanszék</h4><i class="fas fa-graduation-cap"></i> <i class="fas fa-industry"></i><h5>(2010 - 2011)</h5><p><strong>Médiatechnológus Asszisztens / Grafikus, Tananyag fejlesztő</strong></p>',
        'oktav' : '<h4>OKTÁV Továbbképző Intézmény</h4><i class="fas fa-graduation-cap"></i><h5>2008 - 2010</h5><p><strong>Multimédia Fejlesztő</strong></p>',
        
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
        'portfolioIntroduction' : '2009-től több projektben vettem részt, mint kivitelező, segítség nyújtó:',
        //klima_projekt
        'klima' : '<h3><a href="#">Projekt feladat</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2020 Július</span></div><p>Az első Projekt feladat a ProgramozásKarriernél (Iskola)</p><p>HTML5, CSS3, Bootstrap</p>',
        //keletifront
        'keletiFront' : '<h3><a href="#">Facebook logo tervezés</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2019 Január</span></div><p>Egy Airsoft szaküzletnek tervezve</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3><a href="#">Emlék tábla tervezés</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2018 Április</span></div><p>A 150 éves Esztergomi tűzoltóság rendezvény részére tervezve</p><p>CorelDraw Vektor Grafika</p>',
        //plakett
        'plakett' : '<h3><a href="#">Plakett tervezés</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2018 Április</div><p>A 150 éves Esztergomi tűzoltóság részére tervezve</p><p>Adobe Photoshop Raszter Grafika</p>',
        //agrarElet
        'agrar' : '<h3><a href="#">Agrár Élet Magazin</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2016 Szeptember </div><p>Meglévő weboldal továbbfejlesztése, keretrendszer frissítés, Grafikai munkák</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3><a href="#">Tűzoltóság címer</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2015 Április </div><p>A helyi Önkéntes tűzoltóság részére Tervezett címer</p><p>Adobe Photoshop Raszter Grafika</p>',
        //vitézekLogo
        'vitezek' : '<h3><a href="#">Esztergomi Vitézek Címer</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2015 Március </div><p>Az Esztergomi Vitézek Rugby csapat részére tervezett logo</p><p>Adobe Photoshop Vektor Grafika</p>',
        //Thalia
        'thalia': '<h3><a href="#">Thália Tanoda Budapest (Színművészeti Akadémia)</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2014 - 2015</span></div><p>Weboldal Karbantartás, új funkciók telepítése, áttervezése, Galéria javítása, képek retusálása</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3><a href="#">Személyi Weboldal</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2012 Február</span></div><p>Weboldal és blog fejlesztése, grafikai elemek elkészítése, dokumentáció illetve felhasználói dokumentumok írása</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3><a href="#">DRH-Norway</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2010 Február</span></div><p>Meglévő weboldal továbbfejlesztése, és kisebb grafikai módosítások készítése. Jogosultság kezelés</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3><a href="#">Garancstető lakópark</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> 2009 Július</div><p>Weboldal fejlesztése, jogosultságok kiosztása, dokumentáció és felhasználói dokumentumok megírása prezentálása.</p><p>HTML, CSS, Flash, Joomla!</p>',
        
        //section_6
        "contactParagraph": "Küldjön Üzenetet, vagy keressen meg egyébb módon:",
        "contactH" : "Emailban:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="email" placeholder="Email cim..." class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="subject" placeholder="Tárgy..." class="contact-subject form-control" id="contact-subject">' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Üzenet</label><textarea name="message" placeholder="Üzenet..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "Emailban:",
        "contactBtn": "Küldés!",
        "findMe" : "Itt is megtalál:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> Lakhely: Neuenhof, Aargau, Svájc',
        //footer
        'summ' : '<p>&copy; Pfeiffer Zoltán 2020</p><p>A weboldal Összesen:  <i class="fas fa-mug-hot"></i> 50 csésze kávé, és sok sok sor HTML, CSS, és JS!  </p>',
    },
//német adatok
    "de":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
       
        //menu
        "debut" : 'Vorstellung',
        "about" : "Über",
        "timeline" : "Arbeitsort und Schulen",
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
        "workTogether" : "Lass uns zusammen arbeiten!",
        
        //section_1
        "plan" : "Planen",
        "planParagraph" : "Neue webseite? Alte webseite verbessern? Verbesserung von Webseiten um sie für Menschen mit Behinderungen? Schreiben Sie mich an!",
        "develop" : "Entwicklen",
        "developParagraph":"Entwicklung mit HTML5, CSS3, Javascript, SQL, PhP, Python",
        "workFrame" : "Content Management Systemen",
        "problem" : " Kein Problem!",
       
        //section_2
        'programozaskarrier' : '<h4>Programozás Karrier</h4><i class="fas fa-graduation-cap"></i><h5>(2020)</h5><p><strong>FrontEnd Webentwickler</strong></p>',
        'dominos' : '<h4>Dominos Pizza Dietikon</h4><i class="fas fa-industry"></i><h5>(2018- Heute)</h5><p><strong>Kurrier, Insider, seit 2019 Schicht manager</strong></p>',
        'esztergom' : '<h4>Feuerwehr Hauptsitz Esztergom</h4><i class="fas fa-industry"></i><h5>(2013 - 2018) </h5><p><strong> Feuerwehrmann, seit 2015: Einsatzleitstelle, Wassertruppmann, 2017- Grafiker </strong></p><p class="underline">Anerkennungen:</p><p>2013 Überschwemmung in Donau</p><p>2014 Heroisch Erhaltene Anerkennung</p>',
        'piliscsaba' : '<h4>Freiwillige Feuerwehr Piliscsaba</h4><i class="fas fa-industry"></i><h5>(2014 - 2018)</h5><p><strong> Einsatzführer,  Grafiker, Webentwickler</strong></p>',
        'drh' : '<h4>DRH Norway</h4><i class="fas fa-industry"></i><h5>(2012)</h5><p><strong>Grafiker, Webentwickler</strong></p>',
        'ecotech' : '<h4>Ecotech nonprofit Zrt.</h4><i class="fas fa-industry"></i><h5>(2011 - 2012)</h5><p><strong>grafiker, webfentwickler, Video Schneider</strong></p>',
        'gkprojekt' : '<h4>GK-Projekt</h4><i class="fas fa-industry"></i><h5>(2009 - 2010)</h5><p><strong>Webentwickler</strong></p>',
        'duf' : '<h4>Hochschule Dunaújváros Kommunikation und Medienwissenschaft Lehrstuhl</h4><i class="fas fa-graduation-cap"></i> <i class="fas fa-industry"></i><h5>(2010 - 2011)</h5><p><strong>Mediamatiker Assistent / Grafiker, Lehrstoff entwickler</strong></p>',
        'oktav' : '<h4>OKTAV Fachschule</h4><i class="fas fa-graduation-cap"></i><h5>2008 - 2010</h5><p><strong>Mediamatiker</strong></p>',

        //section_3
        'graphic': '<h3>Grafik</h3><p>Vector/ Raster grafische Arbeiten planung, Verarbeitung mit Hilfe von Adobe Photoshop, Adobe Illustrator oder CorelDraw</p>',
        'creative': '<h3>Kreativität</h3><p>Lass es sein grafiker arbeit, webentwicklung Ich werde mich erfinden in alle situation! Und Google ist mein beste Freund!</p>',
        'frontEnd': '<h3>FrontEnd</h3><p>HTML5, CSS3, Bootstrap,  JavaScript, </p>',
        'backEnd' : '	<h3>BackEnd</h3><p>PHP, Python, SQL</p>',

        //section_4
        'techs': 'Verfügbare Techniken:',
        'unlocked': 'Freigeschaltet:',
        'graphicMedia': 'Grafik, Media',
        'locked' : 'Gesperrt:',

        //section_5
        'portfolioIntroduction' : 'Seit 2009 war ich als Auftragnehmer und Helfer an mehreren Projekten beteiligt. Eine Vorschau:',
        //klima_projekt
        'klima' : '<h3><a href="#">Projekt Aufgabe</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Juli 2020</span></div><p>Der Erste projekt aufgabe bei Programozáskarrier (Schule)</p><p>HTML5, CSS3, Bootstrap</p>',
        //KeletiFront
        'keletiFront' : '<h3><a href="#">Facebook Logo design</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Januar 2019</span></div><p>Designed für ein Airsoft Spezialitätengeschäft</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3><a href="#">Gedenktafel design</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>April 2018</span></div><p>Entworfen für die 150 Jahre alte Veranstaltung der Feuerwehr Esztergom </p><p>CorelDraw Vector Grafik</p>',
        //plakett
        'plakett' : '<h3><a href="#">Plakette design</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2018</div><p>Entworfen für die 150 Jahre alte Veranstaltung der Feuerwehr Esztergom</p><p>Adobe Photoshop Raster Grafik</p>',
        //agrarElet
        'agrar' : '<h3><a href="#">Agrár Élet Magazin</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>September 2016</div><p>Aktualisieren einer vorhandenen Website, Aktualisieren eines Frameworks, Grafik design aktualisiren</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3><a href="#">Wappen für die Freiwillige Feuerwehr</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2015</div><p>Designed für die örtliche freiwillige Feuerwehr</p><p>Adobe Photoshop Raster Grafik</p>',
        //vitézekLogo
        'vitezek' : '<h3><a href="#">Wappen für Esztergomi Vitézek</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>März 2015</div><p>Designed für Esztergomi Vitézek Rugby Mannschaft</p><p>Adobe Photoshop Vector Grafik</p>',
        //Thalia
        'thalia': '<h3><a href="#">Thália Tanoda Budapest (Akademie der darstellenden Künste)</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2013 - 2015</span></div><p>Website-Wartung, Installation neuer Funktionen, Neugestaltung, Reparatur der Galerie, Retusche von Bildern</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3><a href="#">Persönliche Website</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Februar 2012</span></div><p>Website- und Blog-Entwicklung, Erstellung grafischer Elemente, Verfassen von Dokumentationen und Benutzerdokumenten</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3><a href="#">DRH-Norway</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>Februar 2010</span></div><p>Aktualisieren einer vorhandenen Website und Vornehmen geringfügiger grafischer Änderungen. Zugriffsverwaltung</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3><a href="#">Garancstető Wohnpark</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>Juli 2009</div><p>Website Entwicklung, Erstellung grafischer Elemente, Verfassen von Dokumentationen und Benutzerdokumenten</p><p>HTML, CSS, Flash, Joomla!</p>',

        //section_6
        "contactParagraph": "Senden Sie eine Nachricht oder suchen Sie auf andere Weise nach :",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="Email" placeholder="E-Mail-Addresse" class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Thema</label><input type="text" name="subject" placeholder="Thema" class="contact-subject form-control" id="contact-subject">' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Nachricht</label><textarea name="message" placeholder="Nachricht..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "in E-mail:",
        "contactBtn": "Senden!",
        "findMe" : "Hier auch finden mir:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> Lakhely: Neuenhof, Aargau, Schweiz',
        //footer
        'summ' : '<p>&copy; Zoltán Pfeiffer 2020</p><p>Diese Webseite hat insgesamt:  <i class="fas fa-mug-hot"></i> 50 tasse Coffee, und mehr und mehr reihe HTML, CSS, und JS</p>',

   },
//angol adatok
    "en":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
       
        //menu
        "debut" : ' Introduction',
        "about" : "About",
        "timeline" : "Workplace and School",
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
       
        //section_2
        'programozaskarrier' : '<h4>Programozás Karrier</h4><i class="fas fa-graduation-cap"></i><h5>(2020)</h5><p><strong>FrontEnd webdeveloper</strong></p>',
        'dominos' : '<h4>Dominos Pizza Dietikon</h4><i class="fas fa-industry"></i><h5>(2018- today)</h5><p><strong>dispatch-rider, Insider, since 2019 Sift manager</strong></p>',
        'esztergom' : '<h4> Fire HQ Esztergom</h4><i class="fas fa-industry"></i><h5>(2013 - 2018) </h5><p><strong> Firefighter, seit 2015: Line Comandder dispatcher, 2017- Graphic </strong></p><p class="underline">Recognitions:</p><p>2013 Flooding in Danube</p><p>2014 Heroic recognition</p>',
        'piliscsaba' : '<h4>Volunteer Firefighter Piliscsaba</h4><i class="fas fa-industry"></i><h5>(2014 - 2018)</h5><p><strong> Squad commander,  Graphic, Webdeveloper</strong></p>',
        'drh' : '<h4>DRH Norway</h4><i class="fas fa-industry"></i><h5>(2012)</h5><p><strong>Graphic, Webdeweloperr</strong></p>',
        'ecotech' : '<h4>Ecotech nonprofit Zrt.</h4><i class="fas fa-industry"></i><h5>(2011 - 2012)</h5><p><strong>Graphic, Webdeveloper, Video cutter</strong></p>',
        'gkprojekt' : '<h4>GK-Projekt</h4><i class="fas fa-industry"></i><h5>(2009 - 2010)</h5><p><strong>Webdeveloper</strong></p>',
        'duf' : '<h4>College of Dunaujváros Kommunikation and Mediascience department</h4><i class="fas fa-graduation-cap"></i> <i class="fas fa-industry"></i><h5>(2010 - 2011)</h5><p><strong>Mediatechnologist assistant / Graphic, educational material developer</strong></p>',
        'oktav' : '<h4>OKTAV technikal school</h4><i class="fas fa-graduation-cap"></i><h5>2008 - 2010</h5><p><strong>Multimedia developer</strong></p>',

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
        //klima_projekt
        'klima' : '<h3><a href="#">Projekt task</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>July 2020</span></div><p>The first projekt task at Programozáskarrier (School)</p><p>HTML5, CSS3, Bootstrap</p>',
        //keletifront
        'keletiFront' : '<h3><a href="#">Facebook logo design</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>January 2019</span></div><p>Designed for a speciality store</p><p>Photoshop</p>',
        //150éves
        'tuzoltosag' : '<h3><a href="#">Memorial plaque</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>April 2018</span></div><p>Designed for the 150 year old Esztergom Fire Brigade event</p><p>CorelDraw Vector graphic</p>',
        //plakett
        'plakett' : '<h3><a href="#">Plaque design</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2018</div><p>Designed for the 150 year old Esztergom Fire Brigade event</p><p>Adobe Photoshop Raster Graphik</p>',
        //agrarElet
        'agrar' : '<h3><a href="#">Agrár Élet Magazin</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>September 2016</div><p>Updating an existing website, updating a framework, Graphik design update</p><p>Adobe Photoshop, WordPress, Jquery, Html, Css, PHP</p>',
        //pcsÖte
        'pcsote': '<h3><a href="#">Coat of arms of the volunteer fire department</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>April 2015</div><p>Designed coat of arms of the local volunteer fire department</p><p>Adobe Photoshop Raster Graphik</p>',
        //vitézekLogo
        'vitezek' : '<h3><a href="#">Coat of arms of Esztergomi Vitézek</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>March 2015</div><p>Designed coat of arms of the Esztergomi Vitézek Rugby team</p><p>Adobe Photoshop Vector Graphic</p>',
        //Thalia
        'thalia': '<h3><a href="#">Thália Tanoda Budapest (Academy of Performing Arts)</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span> 2013 - 2015</span></div><p>Website Maintenance, installing new features, redesigning, repairing the gallery, retouching images</p><p>HTML, CSS, Joomla!, Photoshop</p>',
        //PDA
        'pda': '<h3><a href="#">Personal Website</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>February 2012</span></div><p>Website and blog development, creation of graphic elements, writing of documentation and user documents</p><p>HTML, CSS, Drupal, Photoshop</p>',
        //DRH
        'drhNorway': '<h3><a href="#">DRH-Norway</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i> <span>February 2010</span></div><p>Upgrading an existing website and making minor graphic changes. Access management</p><p>HTML, CSS, Joomla!</p>',
        //Garancstető
        'garancs': '<h3><a href="#">Garancstető residental park</a> <i class="fas fa-angle-right"></i></h3><div class="section-5-box-date"><i class="far fa-calendar"></i>July 2009</div><p>Website development, creation of graphic elements, writing of documentation and user documents</p><p>HTML, CSS, Flash, Joomla!</p>',

        //section_6
        "contactParagraph": "Send a Message or other way find me:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="email" placeholder="e-mail address..." class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="subject" placeholder="Subject..." class="contact-subject form-control" id="contact-subject">',
        "contact-message" : '<label class="sr-only" for="contact-message">Message</label><textarea name="message" placeholder="Message..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "in email:",
        "contactBtn": "Sending!",
        "findMe" : "You can find it here too:",
        "telefon" : '<i class="fas fa-mobile-alt"></i> Mobil: +41-76-607-72-28',
        "location" : '<i class="fas fa-map-marker-alt"></i> Lakhely: Neuenhof, Aargau, Switzerland',
        //footer
        'summ' : '<p>&copy; Zoltán Pfeiffer 2020</p><p>This Webseite all in all:  <i class="fas fa-mug-hot"></i> 50 cup Coffee, and lots row of HTML, CSS, and JS!  </p>',

    }
}
const langBtn = document.querySelector(".langWrap");
const link = document.querySelectorAll("a.language");
var siteLang = window.navigator.language;
// check and convert site language
if(siteLang == "hu-HU"){
    siteLang = "hu";
}else if( siteLang == "de-DE"){
  sitelang = "de";
}else{
  siteLang = "en";
};

if (siteLang != "#hu") {
    for (let defLang of document.querySelectorAll("[data-i18n]")) {
        defLang.innerHTML = portfolio.i18n[siteLang][defLang.dataset.i18n];
      };
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
