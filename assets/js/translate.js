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
        "planParagraph" : "Ön elmondja, én megvalósítom! Folyamatosan egyeztetünk, így bármely rész azonnal javítható.",
        "develop" : "Fejlesztés",
        "developParagraph":" Fejlesztés HTML5, CSS3, Javascript, SQL, PhP, Python használatával",
        "workFrame" : "Keretrendszerek",
        "problem" : " Nem probléma!",

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
        "planParagraph" : "Sie sagen mir, ich werde machen es möglich! Wir verhandeln ständig, damit jedes Teil sofort repariert werden kann.",
        "develop" : "Entwicklen",
        "developParagraph":"Entwicklung mit HTML5, CSS3, Javascript, SQL, PhP, Python",
        "workFrame" : "Content Management Systemen",
        "problem" : " Kein Problem!",

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
        "planParagraph" : "You tell me, I'll make it happen! We are constantly negotiating so any part can be repaired immediately.",
        "develop" : "Development",
        "developParagraph":"Development using HTML5, CSS3, Javascript, SQL, PhP, Python",
        "workFrame" : "Content Management Systems",
        "problem" : "No problem!",

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
