// Resume section tabs and tab content
// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");

// var resumeTabNav = function(resumeTabClick) {
//     resumeTabContents.forEach((resumeTabContent) => {
//         resumeTabContent.style.display = "none";
//         resumeTabContent.classList.remove("active");
//     });

//     resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//         resumePortfolioTabBtn.classList.remove("active");
//     });

//     resumeTabContents[resumeTabClick].style.display = "flex";

//     setTimeout(() => {
//         resumeTabContents[resumeTabClick].classList.add("active");
//     }, 100);
    
//     resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// }
    
// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//     resumePortfolioTabBtn.addEventListener("click", () => {
//         resumeTabNav(i);
//     });
// });

// Service Modal open/close
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";

        setTimeout(() => {
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });
});

// Portfolio Modal
// filter portfolio items
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if(filter === "all" || cardWithModal.classList.contains(filter)) {
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease"
                    }, 1);
                }
                else {
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease"
                    }, 1);
                }
            });
            // Add active class to the clicked tab button
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

// Portfolio Modal open/close
const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackDrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackDrop.style.display = "flex";
        setTimeout(() => {
            portfolioBackDrop.classList.add("active");
        }, 300);
        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackDrop.style.display = "none";
        }, 500);
        setTimeout(() => {
            portfolioBackDrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });
});

// Swiper
var swiper = new Swiper(".sue-client-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Send/Receive EmailJS
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "1rUzAAy_je0nPIJNQ",
    });
})();

sueContactForm = document.getElementById("sue-contact-form");
sueContactFormAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener('submit', function(event) {
event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_hs5gf32', 'template_kkb3zjh', '#sue-contact-form')
    .then(() => {
        // console.log('SUCCESS!');
        sueContactFormAlert.innerHTML = "<span>Your Message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
        sueContactForm.reset();

        setTimeout(() => {
            sueContactFormAlert.innerHTML = "";
        }, 5000);

    }, (error) => {
        // console.log('FAILED...', error);
        sueContactFormAlert.innerHTML = "<span>Message not sent</span> <i class='ri-error-warning-fill'></i>";
        sueContactFormAlert.title = error;
    });
});

// Shrink the height of the header on scroll
window.addEventListener("scroll", () => {
    const sueHeader = document.querySelector(".sue-header");
    sueHeader.classList.toggle("shrink", window.scrollY > 0);
});

// Bottom Navigation Menu
// Each Bottom Navigation Menu Item active on page scroll
window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) => {
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop - 50; // Adjusted for header height
        let id = navMenuSection.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        } else {
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    });
});
// Javascript to show bottom navigation menu on home (page load)
window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});
// Javascript to show/hide bottom navigation menu on scroll
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if (window.scrollY < 10) {
        menuHideBtn.classList.remove("active");

        function scrollStopped() {
            bottomNav.classList.add("active");
        }
        
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);   
    }

    if (window.scrollY > 10) {
        menuHideBtn.classList.add("active");

        function scrollStopped() {
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }
        
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);   
    }
});

//Hide bottom navigation menu on click
menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

// Show bottom navigation menu on click
menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});

// To Top Button with scroll indicator bar
window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");
    
    toTopBtn.classList.toggle("active", window.scrollY > 0);

    // Scroll indicator bar
    const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height) * 100;

    scrollIndicatorBar.style.height = scrollValue + "%";
});

// customize cursor
const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
});

// cursor effects on hover
const cursorHoverlinks  = document.querySelectorAll("body a, theme-btn, .sue-main-btn, .portfolio-card, .swiper-button-prev, .swiper-button-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseover", () => {
        cursorDot.classList.add("large");
        cursorCircle.style.display = "none";
    });
});

cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseout", () => {
        cursorDot.classList.remove("large");
        cursorCircle.style.display = "block";
    });
});

// Website dark/light mode theme
// change theme and save current theme on click the theme button
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    // Change theme icon and theme on click theme button.
    themeBtn.classList.toggle("active-sun-icon");
    themeBtn.classList.toggle("active-light-head");
    document.body.classList.toggle("light-theme");

    // Save theme icon and theme on click theme button.
    const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
    const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

    localStorage.setItem("sue-saved-icon", getCurrentIcon());
    localStorage.setItem("sue-saved-theme", getCurrentTheme());
});

// Get saved theme and icon from localStorage
const savedIcon = localStorage.getItem("sue-saved-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
    document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});

// Scrollreveal JS Animation
// common reveal options to create reveal animation
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400

});
// Target element and specify options to create reveal animation
ScrollReveal().reveal('.avatar-img', { delay: 50, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.about-info, .sue-footer .sue-logo, .spotify-btn', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.pro-card, .about-buttons .sue-main-btn, .portfolio-tabs .tab-btn', { delay: 300, origin: 'right', interval: 50 });
ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item', { delay: 100, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.sue-client-swiper, .contact-form-body', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300 });
