import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Cars from '../pages/cars';
import Animals from '../pages/animals';
import People from '../pages/people';
import Nature from '../pages/nature';
import Other from '../pages/other';
import Popup from './Popup'
import {cardList} from '../scripts/constants'

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null)
  
  const closePopup = () => {
    setSelectedCard(null)
  }

  const handleCardClick = (card, i) => {
    setSelectedCard(card)
    setInd(i)
  }

  const [ind, setInd] = React.useState(null)

  const handlePrevCard = () => {
    setSelectedCard(cardList[ind - 1])
    setInd(ind - 1)
  }

  const handleNextCard = () => {
    setSelectedCard(cardList[ind + 1])
    setInd(ind + 1)
  }

  return (
    <>
      <Header>
      </Header>
      <Router>
        <Routes>
          <Route path="/" element={<Content onCardClick={handleCardClick}/>} />
          <Route path="/cars" element={<Cars onCardClick={handleCardClick}/>} />
          <Route path="/animals" element={<Animals onCardClick={handleCardClick}/>} />
          <Route path="/people" element={<People onCardClick={handleCardClick}/>} />
          <Route path="/nature" element={<Nature onCardClick={handleCardClick}/>} />
          <Route path="/other" element={<Other onCardClick={handleCardClick}/>} />
        </Routes>
      </Router>

      <Popup
        card={selectedCard}
        onClose={closePopup}
        prevCard={handlePrevCard}
        nextCard={handleNextCard}
      >
      </Popup>

      <Footer>
      </Footer>
    </>
  );
}

export default App;
