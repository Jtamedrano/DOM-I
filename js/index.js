const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street<br /> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

/**
 * qSS - querySelector Shortcut
 *
 * Returns the first element that is a descendant of node that matches selectors.
 *
 * @param {text} text Tag, Class, ID
 */

function qSS(selectors) {
  return document.querySelector(selectors);
}
/**
 * qSA - querySelectorAll Shortcut
 *
 * Returns all element descendants of node that match selectors.
 *
 * @param {text} text Tag, Class, ID
 */
function qSA(selectors) {
  return document.querySelectorAll(selectors);
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// NavItems
const navText = Object.values(siteContent.nav);
let navItems = qSA("nav a");
navItems.forEach((_, i) => (navItems[i].innerText = navText[i]));

// CTA Section
qSS(".cta .cta-text h1").innerHTML = siteContent.cta.h1
  .split(" ")
  .join("<br />");
qSS(".cta .cta-text button").innerText = siteContent.cta.button;
qSS("#cta-img").src = siteContent.cta["img-src"];

/**
 * Main Content
 *
 * mainHeading pulls the headings from the data above so it can iterate over the mCHeading Node List
 * mainPar pulls the content from the data above so it can iterate over the mCPar Node List
 */
const mainHeading = [
  siteContent["main-content"]["features-h4"],
  siteContent["main-content"]["about-h4"],
  siteContent["main-content"]["services-h4"],
  siteContent["main-content"]["product-h4"],
  siteContent["main-content"]["vision-h4"],
];

const mCHeading = qSA(".main-content h4");
mCHeading.forEach((_, i) => (mCHeading[i].innerText = mainHeading[i]));

qSS("#middle-img").src = siteContent["main-content"]["middle-img-src"];

const mainPar = [
  siteContent["main-content"]["features-content"],
  siteContent["main-content"]["about-content"],
  siteContent["main-content"]["services-content"],
  siteContent["main-content"]["product-content"],
  siteContent["main-content"]["vision-content"],
];
const mCPar = qSA(".main-content p");
mCPar.forEach((_, i) => (mCPar[i].innerText = mainPar[i]));

// Contact Section

const contactInfo = Object.values(siteContent.contact);
qSS(".contact h4").innerText = contactInfo[0];
const ctc = qSA(".contact p");
ctc.forEach((_, i) => (ctc[i].innerHTML = contactInfo[i + 1]));

// Footer

qSS("footer p").innerText = siteContent.footer.copyright;
