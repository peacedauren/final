import {cardList} from '../scripts/constants'
import Card from '../components/Card'
import React from 'react'

export default function Nature ({onCardClick}) {

  return (
    <main className="content">

      <section className="gallery content__section">
        <h1 className="gallery__heading">nature</h1>
        <ul className="gallery__list">
          {cardList.filter(item => item.typeOf == 'nature').map((item, ind) => (
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


