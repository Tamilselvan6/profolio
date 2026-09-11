
var sidemen = document.getElementById("sidemenu");
function openmenu() {
    sidemen.style.right = "0";
}
function closemenu() {
    sidemen.style.right = "-200px";
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(evt, tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    evt.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

 document.addEventListener('DOMContentLoaded', function () {
            var socialIcons = document.querySelector('.social-icons-side');
            var closeIcon = document.querySelector('.close-icon');
            var expandIcon = document.querySelector('.expand-icon');
    
            document.querySelector('.close-icon').addEventListener('click', function () {
                socialIcons.style.transition = 'transform 0.8s ease';
                socialIcons.style.transform = 'translateX(-40px)';
                closeIcon.style.display = 'none';
                expandIcon.style.display = 'block';
                setTimeout(function () {
                    socialIcons.style.display = 'none';
                }, 400);
            });
    
            document.querySelector('.expand-icon').addEventListener('click', function () {
                socialIcons.style.transition = 'transform 0.8s ease-in';
                socialIcons.style.transform = 'translateX(0px)';
                expandIcon.style.display = 'none';
                socialIcons.style.display = 'block';
                closeIcon.style.display = 'block';

            });
        });

const contactForm = document.getElementById("contact-form");
const notification = document.getElementById("notification");
const closeNotification = document.getElementById("close-notification");
const notificationSound = new Audio("Notification.mp3");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.Name.value;
    const email = event.target.email.value;
    const message = event.target.Message.value;

    const subject = "New Message from " + name;
    const mailtoLink = "mailto:sritamilselvan6@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message);

    window.location.href = mailtoLink;

    setTimeout(function () {
        notificationSound.play();
        notification.style.display = "block";

        // Hide the notification after 20 seconds
        setTimeout(function () {
            notification.style.display = "none";
        }, 20000);
    }, 1000);
});

closeNotification.addEventListener("click", function () {
    // Close the notification
    notification.style.display = "none";
});

window.addEventListener("scroll", function () {
    var scrollToTop = document.getElementById("scrollToTop");
    if (window.scrollY > 1000) {
        scrollToTop.classList.add("visible");
    } else {
        scrollToTop.classList.remove("visible");
    }
});
function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}
document.addEventListener('click', clickEffect);
ScrollReveal({
    reset: false,
    distance: '30px',
    duration: 800,
    delay: 80,
    viewFactor: 0.15,
    easing: 'ease-out'
});
ScrollReveal().reveal('.logo, #sidemenu', { origin: 'top', reset: false, distance: '15px' });
ScrollReveal().reveal('.header-text', { origin: 'left' });
ScrollReveal().reveal('.header-img', { origin: 'right' });
ScrollReveal().reveal('.about-col-1', { origin: 'left' });
ScrollReveal().reveal('.about-col-2', { origin: 'right' });
ScrollReveal().reveal('#services .sub-title', { origin: 'top' });
ScrollReveal().reveal('.services-list > div', { origin: 'bottom', interval: 120 });
ScrollReveal().reveal('#portfolio .sub-title', { origin: 'top' });
ScrollReveal().reveal('.timeline-item', { origin: 'bottom', interval: 80 });
ScrollReveal().reveal('.git', { origin: 'bottom' });
ScrollReveal().reveal('.gallery-about', { origin: 'left' });
ScrollReveal().reveal('.gallery', { origin: 'bottom' });
ScrollReveal().reveal('#contact .sub-title', { origin: 'top' });
ScrollReveal().reveal('.contact-left', { origin: 'left' });
ScrollReveal().reveal('.contact-right', { origin: 'right' });
ScrollReveal().reveal('.copyright', { origin: 'bottom' });

// Dark / light mode toggle
var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    var themeIcon = themeToggle.querySelector('i');

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        themeIcon.classList.toggle('fa-moon', theme === 'light');
        themeIcon.classList.toggle('fa-sun', theme === 'dark');
    }

    updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'light');

    themeToggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}
