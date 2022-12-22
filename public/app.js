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
const menuItems = document.querySelector(".nav-menu_items");
const menuToggle = document.querySelector(".nav-search_sidebar");
const nav = document.querySelector("nav");
// const closeSideBar = document.querySelector(".nav-search_sidebar__close")


searchBtn.onclick = function click() {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
    menuToggle.classList.add("hide");
}

closeBtn.onclick = function click() {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    menuToggle.classList.remove("hide");
}

menuToggle.onclick = function click() {
    nav.classList.toggle("open");
    menuToggle.classList.add("hide");
    // closeSideBar.classList.add("active");
}

// closeSideBar.onclick = function click() {
//     nav.classList.toggle("open");
//     menuToggle.classList.remove("hide");
//     closeSideBar.classList.remove("active");
// }

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


    //card 2
    const wrapper2 = document.createElement("div");
    wrapper2.classList.add("cards-press_wrapper");

    const dateWrapper2 = document.createElement("div");
    dateWrapper2.classList.add("cards-press_date");

    const cardDate2 = document.createElement("h5");
    cardDate2.textContent = dateBottom;

    const label2 = document.createElement("h5");
    label2.classList.add("cards-press_date__label");
    label2.textContent = regulatoryBottom;

    const contentWrapper2 = document.createElement("div");
    contentWrapper2.classList.add("cards-press_content");
    contentWrapper2.textContent = contentBottom;
    
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
    card.appendChild(wrapper2);

    card.appendChild(footerWrapper);

    wrapper.appendChild(titleCard);
    wrapper.appendChild(dateWrapper);
    wrapper2.appendChild(dateWrapper2);

    dateWrapper.appendChild(cardDate);
    dateWrapper2.appendChild(cardDate2);
    dateWrapper.appendChild(label);
    dateWrapper2.appendChild(label2);
    
    wrapper.appendChild(contentWrapper);
    wrapper2.appendChild(contentWrapper2);

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
    // footerAnchor.classList.add("card-calendar_footer__wrapper");
    miniCardAnchor.setAttribute("href", `/${href}`);

    // const miniCardsImg = document.createElement("img");
    // miniCardsImg.setAttribute("src", `${image}`);
    // miniCardsImg.setAttribute("alt", "mini-card-img");

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
