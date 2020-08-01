var data ={
    "hu":
    {
        "mainTitle" : "Pfeiffer Zoltán Szabadúszó",
        "debut" : "Bemutatkozás",
        "about" : "Rólam",
        "work": "Munkahelyek és Iskolák",
        "portfolio" : "Portfolió",
        "contact" : "Kapcsolat",
        "more" : "Több",
        "skill" : "Képpeségek",
        "hobbi" : "Hobbik és egyéb",
        "title": "Hello Világ!",
        "description" : "Ez egy leírás magyarul"
    },
    "de":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
        "debut" : "Vorstellung",
        "about" : "Über",
        "work" : "Arbeitsort und Schulen",
        "portfolio" : "Portfolio",
        "contact" : "Kontakt",
        "more" : "Mehr",
        "skill" : "Fähigkeiten",
        "hobbi" : "Hobbis und mehr",
        "title": "Hello Welt!",
        "description" : "Das ist eine Abschreibung in Deutsch"
    },
    "en":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
        "debut" : "Introduction",
        "about" : "About",
        "work" : "Workplace and School",
        "portfolio" : "Portfolio",
        "contact" : "Contact",
        "more" : "More",
        "skill" : "Skills",
        "hobbi" : "Hobbis and more",
        "title": "Hello World!",
        "description" : "This is a description in English"
    }
}
// constant declaration and queriSelectors
const lang = document.querySelector('.langWrap');
const link = document.querySelectorAll('a.language');
//menu query
const debut = document.querySelector('span.js-debut');
const about = document.querySelector('span.js-about');
const work = document.querySelector('span.js-timeline');
const portfolio = document.querySelector('span.js-portfolio');
const contact = document.querySelector('span.js-contact');
const more = document.querySelector('span.js-more');
const skill = document.querySelector('span.js-skill');
const hobbi = document.querySelector('span.js-hobbi');
//sectionTop
const aboutSection = document.querySelector('span.js-section-about');
const portfolioSection = document.querySelector('span.js-section-portfolio');;
const titleE1 = document.querySelector('.js-title');
const descE1 = document.querySelector('.js-description');

//language selector button remove and add active class 
link.forEach ( el =>{
    el.addEventListener('click', () =>{
        lang.querySelector('.active').classList.remove('active');
        el.classList.add('active');
//Attribute changer
        const attr = el.getAttribute('hreflang');
// new atribute refill
//page title
        window.document.title = data[attr].mainTitle;
//Menu
        debut.textContent = data[attr].debut;
        about.textContent = data[attr].about;
        work.textContent = data[attr].work;
        portfolio.textContent = data[attr].portfolio;
        contact.textContent = data[attr].contact;
        more.textContent = data[attr].more;
        skill.textContent = data[attr].skill;
        hobbi.textContent = data[attr].hobbi;
//SectionTop
        aboutSection.textContent = about.textContent;
        portfolioSection.textContent = portfolio.textContent;
        titleE1.textContent = data[attr].title;
        descE1.textContent = data[attr].description;
        
    });
});