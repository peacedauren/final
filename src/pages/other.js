import {cardList} from '../scripts/constants'
import Card from '../components/Card'
import React from 'react'

export default function Other ({onCardClick}) {

  return (
    <main className="content">

      <section className="gallery content__section">
        <h1 className="gallery__heading">other</h1>
        <ul className="gallery__list">
          {cardList.filter(item => item.typeOf == 'other').map((item, ind) => (
            <Card
              key={item.id}
              card={item}
              ind={ind}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}


