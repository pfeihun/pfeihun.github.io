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
        //section_6
        "contactParagraph": "Küldjön Üzenetet, vagy keressen meg egyébb módon:",
        "contactH" : "Emailban:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="email" placeholder="Email cim..." class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="subject" placeholder="Tárgy..." class="contact-subject form-control" id="contact-subject">' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Üzenet</label><textarea name="message" placeholder="Üzenet..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "Emailban:",
        "contactBtn": "Küldés!",
        "findMe" : "Itt is megtalál:",
        "telefon" : "Mobil: +41-76-607-72-28"
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

        //section_6
        "contactParagraph": "Senden Sie eine Nachricht oder suchen Sie auf andere Weise nach :",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="Email" placeholder="E-Mail-Addresse" class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Thema</label><input type="text" name="subject" placeholder="Thema" class="contact-subject form-control" id="contact-subject">' ,
        "contact-message" : '<label class="sr-only" for="contact-message">Nachricht</label><textarea name="message" placeholder="Nachricht..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "in E-mail:",
        "contactBtn": "Senden!",
        "findMe" : "Hier auch finden mir:",
        "telefon" : "Mobil: +41-76-607-72-28"
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

        //section_6
        "contactParagraph": "Send a Message or other way find me:",
        "contact-email" : '<label class="sr-only" for="contact-email">E-mail</label><input type="text"  name="email" placeholder="e-mail address..." class="contact-email form-control" id="contact-email">',
        "contact-subject" : '<label class="sr-only" for="contact-subject">Tárgy</label><input type="text" name="subject" placeholder="Subject..." class="contact-subject form-control" id="contact-subject">',
        "contact-message" : '<label class="sr-only" for="contact-message">Message</label><textarea name="message" placeholder="Message..." class="contact-message form-control" id="contact-message"></textarea>',
        "contactH" : "in email:",
        "contactBtn": "Sending!",
        "findMe" : "You can find it here too:",
        "telefon" : "Mobil: +41-76-607-72-28"
    }
}
const langBtn = document.querySelector(".langWrap");
const link = document.querySelectorAll("a.language");
const siteLang = navigator.language;
if (siteLang != "#hu") {
    for (let defLang of document.querySelectorAll("[data-i18n]")) {
        defLang.innerHTML = portfolio.i18n[siteLang][defLang.dataset.i18n];
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
