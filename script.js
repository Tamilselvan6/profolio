
var sidemen = document.getElementById("sidemenu");
function openmenu() {
    sidemen.style.right = "0";
}
function closemenu() {
    sidemen.style.right = "-200px";
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwsdSVNLRFQtU9gkDdeWz3ZB6DKzuLo-fs7lvm-kd00jJFwfH2D4QbZrdD8TUTVsWbTLg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.append('Timestamp', new Date().toLocaleString());

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

ScrollReveal({
    reset: true,
    distance: '95px',
    duration: 1500,
    delay: 250,
    viewFactor: 0.15
});

const revealConfig = {
    origin: 'bottom',
    scale: 0.5,
    interval: 200
};

ScrollReveal().reveal('.logo, #sidemenu, .header-text', { origin: 'top', reset: false });
ScrollReveal().reveal('.about-col-1', { origin: 'bottom' });
ScrollReveal().reveal('.about-col-2', { origin: 'bottom' });
ScrollReveal().reveal('.sub-title, .services-list', revealConfig);
ScrollReveal().reveal('.sub-title, .work-list, .btn', revealConfig);
ScrollReveal().reveal('.gallery-about', { origin: 'bottom' });
ScrollReveal().reveal('.gallery', { origin: 'left', interval: 150 });
ScrollReveal().reveal('.sub-title, .contact-left, .contact-right', revealConfig);
ScrollReveal().reveal('.copyright', { origin: 'bottom' });
ScrollReveal().reveal('.header-img', { scale: 1.7 });
ScrollReveal().reveal('.tab-links', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.fa-brands', { origin: 'bottom', interval: 150, distance: '35px' });
ScrollReveal().reveal('.hire-description', { delay: 400 });
ScrollReveal().reveal('.h1-head, .h6-head, .header-img', { delay: 3050, reset: true, useDelay: 'onload' });
ScrollReveal().reveal('.project-title, .service-title, .description-about, .skills-title, .contact-title, .gallery-title, .education-title, hr, .hire-title', { origin: 'top' });
ScrollReveal().reveal('.img-about, .h6-head, .description-hire-button, .email, .gallery-img', { origin: 'right' });
ScrollReveal().reveal('.srvc, .text, .edc', { origin: 'bottom' });
ScrollReveal().reveal('.h1-head, .hire-description, .name, .gallery-about', { origin: 'left' });
ScrollReveal().reveal('.header-img', { scale: 1.7 });
ScrollReveal().reveal('.prjct', { scale: 0.5, duration: 1500, interval: 200 });
ScrollReveal().reveal('.srvc', { interval: 150 });
ScrollReveal().reveal('.hire-description', { delay: 400 });
ScrollReveal().reveal('.fa-brands', { origin: 'bottom', delay: 500, interval: 150, distance: '35px' });
ScrollReveal().reveal('.h1-head, .h6-head, .header-img', { delay: 3050, reset: true, useDelay: 'onload' });
