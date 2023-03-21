
export const languages = [

  {
    code: "en",
    name: "English",
    country_code: "gb",
    flag: "../../../assets/images/icons/united-states.png",
    title: "Eng",
  },
  {
    code: "dutch",
    name: "Dutch",
    country_code: "dutch",
    flag: "../../../assets/images/icons/dutch.png",
    title: "Dutch",
  },
  {
    code: "fr",
    name: "French ",
    country_code: "fr",
    flag: "../../../assets/images/icons/fr.png",
    title: "Fr",
  },
  {
    code: "ger",
    name: "German",
    country_code: "ger",
    flag: "../../../assets/images/icons/ger.png",
    title: "ger",
  },
  {
    code: "cn",
    name: "Chinese",
    country_code: "chi",
    flag: "../../../assets/images/icons/ch.png",
    title: "chi",
  },
  {
    code: "span",
    name: "Spanish",
    country_code: "span",
    flag: "../../../assets/images/icons/span.png",
    title: "span",
  },
  {
    code: "portu",
    name: "Portuguese",
    country_code: "portu",
    flag: "../../../assets/images/icons/portu.png",
    title: "portu",
  },
  {
    code: "jpn",
    name: "Japanese",
    country_code: "jpn",
    flag: "../../../assets/images/icons/jpn.png",
    title: "Japan",
  },
  {
    code: "arabic",
    name: "Arabic",
    country_code: "arabic",
    flag: "../../../assets/images/icons/arabic.png",
    title: "Arabic",
    dir: 'rtl',
  },

];

export const link_menu_profile = [
  {
    icon: "assets/images/icons/heart-icon.png",
    name: "Favorites",
    path: "#",
  },
  {
    icon: "assets/images/icons/currency-rate-icon.png",
    name: "Change Currency",
    path: "#",
  },
  {
    icon: "assets/images/icons/eye-icon.png",
    name: "Watchlist",
    path: "#",
  },
  {
    icon: "assets/images/icons/grid-icon.png",
    name: "My Collectins",
    path: "#",
  },
];

export const link_menu_commuinty = [
  {
    name: "Help Desk",
    path: "/helpcenter",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  // {
  //   name: "News Letter",
  //   path: "/",
  // },
  {
    name: "Become A Partner",
    path: "/partners",
  },
  {
    name: "Suggestions",
    path: "/suggestions",
  },
  {
    name: "Apply verification",
    path: "/applyverification",
  }
];

export const link_menu_ethereum = [
  {
    name: "Polygon",
    path: "/",
    icon: 'assets/images/icons/polygon.png'
  },
  {
    name: "Binance",
    path: "/",
    icon: 'assets/images/icons/binance.png'
  },
  {
    name: "Harmony",
    path: "/",
    icon: 'assets/images/icons/harmony.png'
  },
]

export const link_menu_explore = [
  {
    name: "navbar.All_NFTs",
    path: "/explorenft",
    icon: '/assets/images/icons/nft-grid.png'
  },
  {
    name: "navbar.Ethereum",
    path: "/explore-ethereum",
    // children: link_menu_ethereum,
    icon: "/assets/images/icons/eth-icon.png"
  },
  {
    name: "Solana",
    path: "/explore-solana",
    icon: '/assets/images/icons/solana-icon.png'
  },
  {
    name: "Polygon",
    path: "/explore-polygon",
    icon: '/assets/images/icons/polygon.png'
  },
  {
    name: "Binance",
    path: "/explore-binance",
    icon: '/assets/images/icons/binance.png'
  },
  {
    name: "Harmony",
    path: "/explore-harmony",
    icon: '/assets/images/icons/harmony.png'
  },
]

const t=false
export const link_main_menu = [
  {
    name: 'navbar.Explore',
    path: '/explore',
    children: link_menu_explore
  },
  {
    name: 'navbar.Activities',
    path: '/activity',
  },
  // {
  //   name: 'navbar.Rewards',
  //   path: '/rewards',
  // },
  {
    name: 'Staking ',
    path: '/rewards',
  },
  {
    name: 'navbar.Community',
    path: '/helpcenter',
    children: link_menu_commuinty
  },
  {
    name: 'navbar.Create',
    path: '/createnewitem'
  },

]

export function langFlag(currentLanguageCode) {
  switch (currentLanguageCode) {
    case "en":
      return "../../../assets/images/icons/united-states.png";
    case "dutch":
      return "../../../assets/images/icons/dutch.png";
    case "fr":
      return "../../../assets/images/icons/fr.png";
    case "ger":
      return "../../../assets/images/icons/ger.png";
    case "cn":
      return "../../../assets/images/icons/ch.png";
    case "span":
      return "../../../assets/images/icons/span.png";
    case "portu":
      return "../../../assets/images/icons/portu.png";
    case "jpn":
      return "../../../assets/images/icons/jpn.png";
    case "arabic":
      return "../../../assets/images/icons/arabic.png";

  }
}
