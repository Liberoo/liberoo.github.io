const offer = document.querySelector('.box1');
const about = document.querySelector('.box2');
const contact = document.querySelector('.box3');
const cbox = document.querySelector('.cbox');
const sbox = document.querySelector('.sbox');
const sbox__weddingplanner = document.querySelector('.sbox__up--left');
const sbox__imprezyfirmowe = document.querySelector('.sbox__up--right');
const sbox__okolicznosciowe = document.querySelector('.sbox__down--left');
const sbox__kinder = document.querySelector('.sbox__down--right');
const weddingplanner = document.querySelector('.weddingplanner');
const imprezyfirmowe = document.querySelector('.imprezyfirmowe');
const okolicznosciowe = document.querySelector('.imprezyokolicznosciowe');
const kinder = document.querySelector('.imprezykinder');
const bgi = document.querySelector('.bgi');
const about__page = document.querySelector('.aboutus');
const contact__page = document.querySelector('.contact');

offer.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.remove('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.add('background');
    bgi.classList.remove('background2');
    about.classList.add('display_invisible');
    contact.classList.add('display_invisible');


}
);
contact.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.add('display_invisible');
    contact__page.classList.remove('display_invisible');



}
);
about.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.remove('display_invisible');
    contact__page.classList.add('display_invisible');



}
);
sbox__weddingplanner.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.remove('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.add('display_invisible');
    contact__page.classList.add('display_invisible');


}
);
sbox__imprezyfirmowe.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.remove('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.add('display_invisible');
    contact__page.classList.add('display_invisible');


}
);
sbox__okolicznosciowe.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.remove('display_invisible');
    kinder.classList.add('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.add('display_invisible');
    contact__page.classList.add('display_invisible');


}
);
sbox__kinder.addEventListener('click', () => {
    cbox.classList.add('display_invisible');
    sbox.classList.add('display_invisible');
    weddingplanner.classList.add('display_invisible');
    imprezyfirmowe.classList.add('display_invisible');
    okolicznosciowe.classList.add('display_invisible');
    kinder.classList.remove('display_invisible');
    bgi.classList.remove('background');
    bgi.classList.add('background2');
    about__page.classList.add('display_invisible');
    contact__page.classList.add('display_invisible');


}

);