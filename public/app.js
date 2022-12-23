const cards =  [
    {   
        title: 'Press release',
        date: '13 December 2021',
        dateBottom: '21 December 2021',
        regulatory: 'Regulatory',
        regulatoryBottom: 'Regulatory',
        content: 'Praesent eu velit ac diam mollis elementum sit amet ac felis',
        contentBottom: 'Praesent eu velit ac diam mollis elementum sit amet ac felis',
        footer: 'All press releases',
        href: 'pressreleases'
    },
    {
        title: 'Finacial Reports',
        date: '13 December 2021',
        dateBottom: '28 December 2021',
        regulatory: '',
        content: 'Praesent eu velit ac diam mollis elementum sit amet ac felis',
        contentBottom: 'Praesent eu velit ac diam mollis elementum sit amet ac felis',
        footer: 'All financials reports',
        href: 'financialsreports'
    }
];

const miniCardsData = [
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum',
        image: 'assets/mini-card1.png',
        href: 'loremipsum'
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum',
        image: 'assets/mini-card2.png',
        href: 'loremipsum'
    },
    {
        title: 'Lorem ipsum',
        description: 'Lorem ipsum',
        image: 'assets/mini-card1.png',
        href: 'loremipsum'
    }
]

const searchBtn = document.querySelector(".nav-search_btn");
const closeBtn = document.querySelector(".nav-search_close");
const searchBox = document.querySelector(".nav-search_box")
const searchToggle = document.querySelector('.container');
const menuItems = document.querySelector(".nav-navigation");
const menuToggle = document.querySelector(".nav-search_sidebar");
const nav = document.querySelector("nav");
const closeSideBar = document.querySelector(".nav-search_sidebar__close");
const subMenuItem = document.querySelector(".icon-plus");
const subMenuItems = document.querySelector(".nav-navigation_menu");
const iconMinus = document.querySelector(".icon-minus");
const subMenuItemClose = document.querySelector(".icon-minus");


searchBtn.onclick = function click() {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
    searchToggle.classList.add("open");
    menuToggle.classList.add("hide");
}

closeBtn.onclick = function click() {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    searchToggle.classList.remove("open");
    menuToggle.classList.remove("hide");
}

menuToggle.onclick = function click() {
    nav.classList.toggle("open");
    menuToggle.classList.add("hide");
    closeSideBar.classList.add("active");
    document.getElementById("hero").style.visibility = "hidden";
    document.getElementById("cards").style.visibility = "hidden";
}

closeSideBar.onclick = function click() {
    nav.classList.toggle("open");
    menuToggle.classList.remove("hide");
    closeSideBar.classList.remove("active");
    document.getElementById("hero").style.visibility = "visible";
    document.getElementById("cards").style.visibility = "visible";
}

subMenuItem.onclick = function click () {
    subMenuItems.classList.add("clicked");
    subMenuItem.classList.add("hide");
    iconMinus.classList.add("clicked");
}

subMenuItemClose.onclick = function click () {
    subMenuItems.classList.remove("clicked");
    subMenuItem.classList.remove("hide");
    iconMinus.classList.remove("clicked");

}

const cardsSection = document.querySelector(".cards-wrapper");
const miniCardsSection = document.querySelector(".mini-cards_wrapper");

const displayCard = (title, date, regulatory, content, dateBottom, regulatoryBottom, contentBottom, href, footer) => {
    const card = document.createElement("div");
    card.classList.add("cards-press");

    const wrapper = document.createElement("div");
    wrapper.classList.add("cards-press_wrapper");

    const titleCard = document.createElement("h2");
    titleCard.classList.add("cards-press_title");
    titleCard.textContent = title;

    const dateWrapper = document.createElement("div");
    dateWrapper.classList.add("cards-press_date");

    const cardDate = document.createElement("h5");
    cardDate.textContent = date;

    const label = document.createElement("h5");
    label.classList.add("cards-press_date__label");
    label.textContent = regulatory;

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("cards-press_content");
    contentWrapper.textContent = content;

    const wrapperBottom = document.createElement("div");
    wrapperBottom.classList.add("cards-press_wrapper");

    const dateWrapperBottom = document.createElement("div");
    dateWrapperBottom.classList.add("cards-press_date");

    const cardDateBottom = document.createElement("h5");
    cardDateBottom.textContent = dateBottom;

    const labelBottom = document.createElement("h5");
    labelBottom.classList.add("cards-press_date__label");
    labelBottom.textContent = regulatoryBottom;

    const contentWrapperBottom = document.createElement("div");
    contentWrapperBottom.classList.add("cards-press_content");
    contentWrapperBottom.textContent = contentBottom;
    
    const footerWrapper = document.createElement("div");
    footerWrapper.classList.add("cards-press_footer");

    const footerAnchor = document.createElement("a");
    footerAnchor.classList.add("card-calendar_footer__wrapper");
    footerAnchor.setAttribute("href", `/${href}`);

    const footerContent = document.createElement("h4");
    footerContent.textContent = footer;

    const footerIcon = document.createElement("img");
    footerIcon.setAttribute("src", "assets/arrow-right.svg");
    footerIcon.setAttribute("alt", "arrow-right");

    cardsSection.appendChild(card);

    card.appendChild(wrapper);
    card.appendChild(wrapperBottom);

    card.appendChild(footerWrapper);

    wrapper.appendChild(titleCard);
    wrapper.appendChild(dateWrapper);
    wrapperBottom.appendChild(dateWrapperBottom);

    dateWrapper.appendChild(cardDate);
    dateWrapperBottom.appendChild(cardDateBottom);
    dateWrapper.appendChild(label);
    dateWrapperBottom.appendChild(labelBottom);
    
    wrapper.appendChild(contentWrapper);
    wrapperBottom.appendChild(contentWrapperBottom);

    footerWrapper.appendChild(footerAnchor);
    footerAnchor.appendChild(footerContent);
    footerAnchor.appendChild(footerIcon);

};

const generateCard = () => {
    cards.map( c => {
        displayCard(c.title, c.date, c.regulatory, c.content, c.dateBottom, c.regulatoryBottom, c.contentBottom, c.href, c.footer);
    })
};

generateCard();

const displayMiniCards = (title, description, href) => {

    const miniCard = document.createElement("div");
    miniCard.classList.add("mini-cards");

    const miniCardAnchor = document.createElement("a");
    miniCardAnchor.setAttribute("href", `/${href}`);

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("mini-cards_content__wrapper");

    const miniCardContent = document.createElement("div");
    miniCardContent.classList.add("mini-cards_content");

    const miniCardTitle = document.createElement("h3");
    miniCardTitle.textContent = title;

    const miniCardDescription = document.createElement("h4");
    miniCardDescription.textContent = description;

    const miniCardIcon = document.createElement("img");
    miniCardIcon.setAttribute("src", "assets/arrow-right-white.svg");
    miniCardIcon.setAttribute("alt", "arrow-white");

    miniCardsSection.appendChild(miniCard);

    miniCard.appendChild(miniCardAnchor);
    miniCardAnchor.appendChild(contentWrapper)

    contentWrapper.appendChild(miniCardContent);

    miniCardContent.appendChild(miniCardTitle);
    miniCardContent.appendChild(miniCardDescription);
}

const generateMiniCard = () => {
    miniCardsData.map( mc => {
        displayMiniCards(mc.title, mc.description, mc.href);
    })
};

generateMiniCard();
