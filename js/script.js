const RESOURCES_PATH = "../recursos";
const body = document.body;
const br = document.createElement("br");

const banner = createBanner();
const header = createHeader();
const infoContainer = createInfoContainer();
const cardContainer = createCardContainer();
const footerImages = createFooterImages();
const footer = createFooter();

const cardData = [
  {
    title: "ITALY",
    imageSrc: `${RESOURCES_PATH}/italia.jpg`,
    locations: "Rome, Milan, Naples",
    hotelInfo: "SILVER HOTEL, 4 NIGHTS, 5 STARS",
    price: "1,800",
  },
  {
    title: "FRANCE",
    imageSrc: `${RESOURCES_PATH}/francia.jpeg`,
    locations: "Paris, Marseille, Lyon",
    hotelInfo: "NEW PLACE , 5 NIGHTS , 5 STARS",
    price: "2,300",
  },
  {
    title: "GERMANY",
    imageSrc: `${RESOURCES_PATH}/alemania.jpg`,
    locations: "Berlin, Hamburg, Munich",
    hotelInfo: "LUXE HOTEL, 5 NIGHTS, 6 STARS",
    price: "3,100",
  },
  {
    title: "SPAIN",
    imageSrc: `${RESOURCES_PATH}/españa.jpeg`,
    locations: "Madrid, Barcelona, Valencia",
    hotelInfo: "GOOD HOTEL, 4 NIGHTS, 6 STARS",
    price: "4,800",
  },
];

cardData.forEach((card) => {
  const newCard = createCard(card.title, card.imageSrc, card.locations, card.hotelInfo, card.price);
  cardContainer.appendChild(newCard);
});

body.appendChild(banner);
body.appendChild(header);
body.appendChild(infoContainer);
body.appendChild(cardContainer);
body.appendChild(footerImages);
body.appendChild(footer);
renderGlobalTagsAndStyles();

//----------------------------------------------------------------------------------------------------------------------------------------//

function createBanner() {
  const banner = document.createElement("img");
  banner.style.height = "690px";
  banner.style.position = "relative";
  banner.style.width = "100%";
  banner.src = `${RESOURCES_PATH}/Img.jpg`;

  return banner;
}

function createHeader() {
  const header = document.createElement("div");
  header.style.alignItems = "center";
  header.style.backgroundColor = "white";
  header.style.display = "flex";
  header.style.height = "80px";
  header.style.marginLeft = "auto";
  header.style.marginRight = "auto";
  header.style.position = "relative";
  header.style.top = "-650px";
  header.style.width = "80%";

  const logo = document.createElement("img");
  logo.style.height = "75px";
  logo.alt = "logo";
  logo.src = `${RESOURCES_PATH}/LOGO 2.png`;

  const navIcon = document.createElement("div");
  navIcon.style.justifyContent = "left";
  navIcon.style.width = "50%";
  navIcon.appendChild(logo);

  const navButtons = document.createElement("div");
  navButtons.style.display = "flex";
  navButtons.style.gap = "10px";
  navButtons.style.justifyContent = "right";
  navButtons.style.marginRight = "10px";
  navButtons.style.width = "50%";
  navButtons.style.height = "100%";

  const homeButton = createNavButton("HOME", "#9fd133", "#fff");
  const servicesButton = createNavButton("SERVICES", null, "gray");
  const eventsButton = createNavButton("EVENTS", null, "gray");
  const aboutUsButton = createNavButton("ABOUT US", null, "gray");
  const contactButton = createNavButton("CONTACT", null, "gray");

  navButtons.appendChild(homeButton);
  navButtons.appendChild(servicesButton);
  navButtons.appendChild(eventsButton);
  navButtons.appendChild(aboutUsButton);
  navButtons.appendChild(contactButton);

  header.appendChild(navIcon);
  header.appendChild(navButtons);

  return header;
}

function createNavButton(text, backgroundColor = null, color = null) {
  const button = document.createElement("a");
  button.style.backgroundColor = backgroundColor;
  button.style.color = color;
  button.style.cursor = "pointer";
  button.style.fontSize = "90%";
  button.style.padding = "10px";
  button.style.width = "80px";
  button.style.textAlign = "center";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.href = "#";
  button.textContent = text;

  return button;
}

function createInfoContainer() {
  const infoContainer = document.createElement("div");
  infoContainer.style.backgroundColor = "white";
  infoContainer.style.height = "250px";
  infoContainer.style.left = "150px";
  infoContainer.style.padding = "50px 10px 0 10px";
  infoContainer.style.position = "relative";
  infoContainer.style.textAlign = "center";
  infoContainer.style.top = "-500px";
  infoContainer.style.width = "350px";

  const priceTitle = document.createElement("span");
  priceTitle.style.backgroundColor = "red";
  priceTitle.style.fontSize = "25px";
  priceTitle.style.padding = "10px 25px";
  priceTitle.textContent = "$8,450";

  const locationTitle = document.createElement("h3");
  locationTitle.style.color = "black";
  locationTitle.textContent = "Venice Italy";

  const infoPara = document.createElement("p");
  infoPara.style.color = "gray";
  infoPara.style.fontSize = "80%";
  infoPara.style.marginBottom = "40px";
  infoPara.textContent = "Travel is free responsive template by TemplateMO all images use in this template are from UnisPlash";

  const preBookingButton = document.createElement("button");
  preBookingButton.style.backgroundColor = "#9fd133";
  preBookingButton.style.color = "white";
  preBookingButton.style.padding = "15px 35px";
  preBookingButton.style.border = "none";
  preBookingButton.href = "#";
  preBookingButton.textContent = "PRE-BOOKING";

  infoContainer.appendChild(priceTitle);
  infoContainer.appendChild(locationTitle);
  infoContainer.appendChild(infoPara);
  infoContainer.appendChild(preBookingButton);

  return infoContainer;
}

function createCardContainer() {
  const cardContainer = document.createElement("div");
  cardContainer.style.display = "flex";
  cardContainer.style.gap = "40px";
  cardContainer.style.justifyContent = "center";
  cardContainer.style.margin = "0%";
  cardContainer.style.marginLeft = "auto";
  cardContainer.style.marginRight = "auto";
  cardContainer.style.marginTop = "-395px";
  cardContainer.style.position = "relative";

  return cardContainer;
}

function createCard(title, imageSrc, locations, hotelInfo, price) {
  const card = document.createElement("div");
  card.style.marginTop = "-51px";

  const countryTitle = document.createElement("span");
  countryTitle.style.backgroundColor = "#9fd133";
  countryTitle.style.color = "white";
  countryTitle.style.display = "flex";
  countryTitle.style.fontSize = "120%";
  countryTitle.style.fontWeight = "bold";
  countryTitle.style.justifyContent = "center";
  countryTitle.style.padding = "7%";
  countryTitle.textContent = title;

  const countryImg = document.createElement("img");
  countryImg.style.height = "210px";
  countryImg.style.width = "275px";
  countryImg.src = imageSrc;
  countryImg.alt = title;

  const locationsPara = document.createElement("p");
  locationsPara.style.color = "#9fd133";
  locationsPara.textContent = locations;

  const hotelInfoPara = document.createElement("p");
  hotelInfoPara.style.color = "#eb4245";
  hotelInfoPara.textContent = hotelInfo;

  const buyButton = document.createElement("button");
  buyButton.style.backgroundColor = "#9fd133";
  buyButton.style.border = "none";
  buyButton.style.cursor = "pointer";
  buyButton.style.fontSize = "100%";
  buyButton.style.color = "white";
  buyButton.style.padding = "10px";
  buyButton.style.textAlign = "center";
  buyButton.style.width = "100%";
  buyButton.href = "#";
  buyButton.textContent = `$${price} BOOK NOW`;

  card.appendChild(countryTitle);
  card.appendChild(countryImg);
  card.appendChild(locationsPara);
  card.appendChild(hotelInfoPara);
  card.appendChild(document.createElement("br"));
  card.appendChild(buyButton);

  return card;
}

function createFooterImages() {
  const footerImages = document.createElement("img");
  footerImages.style.marginTop = "50px";
  footerImages.style.height = "125px";
  footerImages.style.width = "100%";
  footerImages.src = `${RESOURCES_PATH}/Imagen-trabajo.jpg`;

  return footerImages;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.style.display = "flex";
  footer.style.margin = "40px 140px";
  footer.style.alignItems = "center";
  footer.style.justifyContent = "space-between";

  const logo = document.createElement("img");
  logo.style.height = "75px";
  logo.alt = "logo";
  logo.src = `${RESOURCES_PATH}/LOGO 2.png`;

  const footerText = document.createElement("p");
  footerText.style.color = "#9fd133";
  footerText.style.fontSize = "100%";
  footerText.style.margin = "0";
  footerText.style.textAlign = "center";
  footerText.textContent = "Copyright © 2024 Company Name - Travel by TemplateMO";

  footer.appendChild(logo);
  footer.appendChild(footerText);

  return footer;
}

function renderGlobalTagsAndStyles() {
  body.style.fontFamily = "Arial, sans-serif";
  body.style.margin = "0";
  body.style.padding = "0";

  const aTags = document.querySelectorAll("a");
  aTags.forEach((aTag) => {
    aTag.style.textDecoration = "none";
  });
}
