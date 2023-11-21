/* nav toggle button select*/
const header = document.getElementById('header')
const toggleBtn = document.querySelector('#nav__toggle');
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.querySelector('.nav__menu')
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const html = document.querySelector('html')
const themeToggle = document.getElementById('theme__toggle');
const headerTitle = document.querySelectorAll('.header__title')
const isTheme = localStorage.getItem('theme');
const hero = document.getElementById('hero');
const servicesCard = document.querySelectorAll('.services__card');
const testimonialCard = document.querySelectorAll('.testimonial__card');
const priceCard = document.querySelectorAll('.price__card');
const blogCard = document.querySelectorAll('.blog__card');
const contactLeft = document.querySelector('.contact__left');
const contactRight = document.querySelector('.contact__right');
const svg = document.querySelectorAll('svg');
const messageInput = document.querySelectorAll('.contact__form input, textarea')



// nav background change function
const maxWidth = window.matchMedia("(max-width: 992px)");
const resizeScreen = () => {
    const width = document.body.clientWidth;
    const isTheme = localStorage.getItem('theme');

    if (width <= 992 && isTheme == "dark") {
        navMenu.style.background = "#242B33";
    } else if (width > 992 && isTheme == "dark") {
        navMenu.style.background = "transparent";
    } else {
        navMenu.style.background = "#FFFFFF";
    }
}
window.addEventListener('resize', resizeScreen)



toggleBtn.addEventListener('click', (event) => {
    if (event.target.id === "toggle__open") {
        toggleOpen.style.display = "none";
        toggleClose.style.display = "block"
        navRight.classList.add('nav__show')
    } else {
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none"
        navRight.classList.remove('nav__show')
    }
})
navRight.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        navRight.classList.remove('nav__show');
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none";

        navLink.forEach((link) => {
            link.classList.remove('active__link')
            if (event.target.hash == link.hash) {
                event.target.classList?.add('active__link')
            }
        })
    }
})
// dark & light mood functionality
if (isTheme == 'dark') {
    html.classList.add('dark');
    moon.style.display = "none";
    sun.style.display = "block"
    html.classList.remove('light');
    hero.style.background = "#1D232A";

    header.style.background = '#1D232A';
    header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
    navLogo.style.color = "#A6ADBA";
    navLink.forEach((item) => item.style.color = "#A6ADBA");
    svg.forEach((item) => item.style.fill = " #A6ADBA");
    messageInput.forEach((input) => {
        input.style.background = "#1D232A";
        input.style.color = "#FFFFFF";
    });

    [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
        card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
        card.style.background = "#242B33";
    });
    resizeScreen()
}

themeToggle.addEventListener('click', () => {
    const active = html.classList.toggle('dark');

    if (active) {
        localStorage.setItem('theme', 'dark');
        moon.style.display = "none";
        sun.style.display = "block";
        html.classList.remove('light');
        hero.style.background = "#1D232A";

        header.style.background = '#1D232A';
        header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
        navLogo.style.color = "#A6ADBA";


        navLink.forEach((item) => item.style.color = "#A6ADBA");
        svg.forEach((item) => item.style.fill = " #A6ADBA");
        messageInput.forEach((input) => {
            input.style.background = "#1D232A";
            input.style.color = "#FFFFFF";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
            card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
            card.style.background = "#242B33";
        })

        resizeScreen()

    } else {
        localStorage.setItem('theme', null);
        moon.style.display = "block";
        sun.style.display = "none";
        html.classList.add('light');
        hero.style.background = "linear-gradient(180deg,#f8fafc,rgba(242,202,252,.11) 34.69%,rgba(250,198,252,.11) 44.06%,rgba(175,183,255,.11) 54.48%,rgba(142,220,200,.07) 64.9%,#f8fafc 97.95%)";

        header.style.background = '#FFFFFF';
        header.style.borderBottom = "none";
        navLogo.style.color = "#18191A";
        navLink.forEach((item) => item.style.color = "#18191A");
        svg.forEach((item) => item.style.fill = "#18191A");
        messageInput.forEach((input) => {
            input.style.background = "#FFFFFF";
            input.style.color = "black";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, contactRight].forEach((card) => {
            card.style.background = "rgb(248 250 252)";
            card.style.border = "1px solid rgba(71, 85, 105, .1)";
            card.style.borderRadius = "4px"
        });
        contactLeft.style.background = "#FFFFFF";
        contactRight.style.background = "#FFFFFF";

        resizeScreen()
    }
})



/* portfolio start */
const portfolioMenu = document.querySelector('.portfolio__menu');
const portfolioItem = document.querySelectorAll('.portfolio__item');
const arrowIcons = document.querySelectorAll('.portfolio__wrappper img');

// this code for dragging
portfolioMenu.addEventListener('mousedown', () => isdragging = true)
portfolioMenu.addEventListener('mouseup', () => isdragging = false)
portfolioMenu.addEventListener('mousemove', (e) => {
    if (!isdragging) return
    portfolioMenu.scrollLeft = portfolioMenu.scrollLeft - e.movementX
})

// this code for clicking
portfolioMenu.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        const menuId = e.target.id;
        portfolioItem.forEach((item) => {
            if (menuId != item.id && menuId != "all-categories") {

                item.style.display = "none"
            } else {
                document.querySelector('.portfolio__menu .active').classList.remove('active');
                e.target.classList.add('active')
                item.style.display = "block";
            }
        })
    }
})

arrowIcons.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        portfolioMenu.style.scrollBehavior = "smooth"
        const id = e.target.id;
        portfolioMenu.scrollLeft -= id == "left" ? -50 : 50;
        portfolioMenu.style.scrollBehavior = "unset"
    })
})
/* portfolio menu end */


/* Testimonial start */

const testimonialBody = document.querySelector('.testimonial__body');
let isdragging = false;

testimonialBody.addEventListener('mousemove', (e) => {
    if (!isdragging) return
    testimonialBody.scrollLeft = testimonialBody.scrollLeft - e.movementX;
})
testimonialBody.addEventListener('mousedown', () => isdragging = true)
testimonialBody.addEventListener('mouseup', () => isdragging = false)

/* Testimonial end */



