import {
  createElement,
  createHeader,
} from '../../script/layout.js'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

//===

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нове', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewied: false,
  },
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нове', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewied: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'content')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewied
        ? 'block button post--viewed'
        : 'block button',
    )

    const postHeader = createElement('div', 'block__header')

    //===

    const categoryList = createElement(
      'div',
      'block__header--list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    //===

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    //==

    postHeader.append(categoryList, dateSpan)

    //===

    const infoParagraph = createElement(
      'p',
      'block__text',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    //===

    postList.append(post)
  })

  return postList
}

//===

const post = createPost()
page.append(post)

//===

// const POST_LIST = [
//   {
//     category: [
//       { text: 'Важливо', id: 1 },
//       { text: 'Нове', id: 2 },
//     ],
//     info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//     date: '25.01',
//     viewied: false,
//   },
//   {
//     category: [
//       { text: 'Важливо', id: 1 },
//       { text: 'Нове', id: 2 },
//     ],
//     info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
//     date: '25.01',
//     viewied: true,
//   },
// ]

// const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewied
//         ? 'post button post--viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     //===

//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })

//     //===

//     const dateSpan = createElement(
//       'span',
//       'post__data',
//       postData.date,
//     )

//     //==

//     postHeader.append(categoryList, dateSpan)

//     //===

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     //===

//     postList.append(post)
//   })

//   return postList
// }

// //===

// const post = createPost()
// page.append(post)

// //===

//=======================================================================================

//=======================================================================================

//=======================================================================================

import {
  createElementTg,
  createHeaderTg,
} from '../../script/layout.js'

const pageTg = document.querySelector('.pageTg')

const headerTg = createHeaderTg()

pageTg.append(headerTg)

const titleTg = createElementTg('h1', 'title', "Ком'юніті")

pageTg.append(titleTg)

//===

const CARD_INFO = [
  {
    navigation: [
      { text: 'База знань', id: 1 },
      { text: 'Інформація', id: 2 },
    ],
    title: 'Що таке база знань?',
    description:
      'База знаний - база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
    buttonText: `Перейти до ком'юніті у Телеграм`,
  },
]

const createCard = () => {
  const cardList = createElement('main', 'main')

  const navigationList = createElement('div', 'nav')

  CARD_INFO.forEach((cardData) => {
    cardData.navigation.forEach((navigation) => {
      const navigationSpan = createElement(
        'div',
        `nav--${navigation.id}`,
        navigation.text,
      )
      navigationList.append(navigationSpan)
    })

    cardList.append(navigationList)

    const cardImg = createElement('div', 'img')
    const card = createElement('div', 'description')
    const cardTitle = createElement(
      'div',
      'description__title',
      cardData.title,
    )
    const cardInfo = createElement(
      'div',
      'description__text',
      cardData.description,
    )
    const cardButton = createElement(
      'button',
      'button-tg',
      cardData.buttonText,
    )

    cardList.append(cardImg)
    card.append(cardTitle, cardInfo)
    cardList.append(card)
    cardList.append(cardButton)
  })
  return cardList
}

const card = createCard()
pageTg.append(card)
