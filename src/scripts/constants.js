import card1 from '../images/nature.jpg';
import card2 from '../images/car-2.jpg';
import card3 from '../images/football.jpg';
import card4 from '../images/ronaldo.jpg';
import card5 from '../images/boots-1.jpg';
import card6 from '../images/someone.jpg';
import card7 from '../images/cat.jpg';


const cardList = [
  {
    link: card1,
    typeOf: "nature",
    title: "природа",
    id: 1,
    isLiked: true,
    comments: [
      {
        text: 'ужас',
        date: '15/4/2023'
      },
      {
        text: 'красиво',
        date: '28/5/2023'
      }
    ]
  },
  {
    link: card2,
    typeOf: "cars",
    title: "машина",
    id: 2,
    isLiked: true,
    comments: [
      {
        text: 'у меня такая же',
        date: '13/4/2023'
      }
    ]
  },
  {
    link: card3,
    typeOf: "other",
    title: "футбол",
    id: 3,
    isLiked: false,
    comments: []
  },

  {
    link: card4,
    typeOf: "people",
    title: "роналду",
    id: 4,
    isLiked: true,
    comments: [
      {
        text: 'goat',
        date: '7/12/2023'
      }
    ]
  },
  {
    link: card5,
    typeOf: "other",
    title: "сапоги",
    id: 5,
    isLiked: false,
    comments: []
  },
  {
    link: card6,
    typeOf: "people",
    title: "кто-то",
    id: 6,
    isLiked: false,
    comments: [
      {
        text: 'кто это?',
        date: '6/12/2023'
      }
    ]
  },
  {
    link: card7,
    typeOf: "animals",
    title: "кот",
    id: 7,
    isLiked: true,
    comments: []
  }
]

export {cardList}
