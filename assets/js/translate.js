var portfolio = {}

portfolio.i18n = {
//magyar adatok
    "hu":
    {
        "mainTitle" : "Pfeiffer Zoltán Szabadúszó",
        "debut" : "Bemutatkozás",
        "about" : "Rólam",
        "timeline": "Munkahelyek és Iskolák",
        "portfolio" : "Portfolió",
        "contact" : "Kapcsolat",
        "more" : "Több",
        "skill" : "Képpeségek",
        "hobbi" : "Hobbik és egyéb",
        "up" : "Fel!",
        "menu": "Menü"
    },
//német adatok
    "de":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
        "debut" : "Vorstellung",
        "about" : "Über",
        "timeline" : "Arbeitsort und Schulen",
        "portfolio" : "Portfolio",
        "contact" : "Kontakt",
        "more" : "Mehr",
        "skill" : "Fähigkeiten",
        "hobbi" : "Hobbis und mehr",
        "up" : "Nach oben!",
        "menu": "Menu"
   },
//angol adatok
    "en":
    {
        "mainTitle" : "Zoltán Pfeiffer Freelancer",
        "debut" : "Introduction",
        "about" : "About",
        "timeline" : "Workplace and School",
        "portfolio" : "Portfolio",
        "contact" : "Contact",
        "more" : "More",
        "skill" : "Skills",
        "hobbi" : "Hobbis and more",
        "up" : "Top!",
        "menu": "Menu"
    }
}
// constant declaration and queriSelectors
const lang = document.querySelector('.langWrap');
const link = document.querySelectorAll('a.language');
//language selector button remove and add active class 
link.forEach ( el =>{
    el.addEventListener('click', () =>{
        lang.querySelector('.active').classList.remove('active');
        el.classList.add('active');
//Attribute changer
        var attr = el.getAttribute('hreflang');
//Menu variables data change - Language element
for ( let node of document.querySelectorAll('[data-i18n]') ) {
  node.innerText = portfolio.i18n[attr][node.dataset.i18n];
}
        
    });
});