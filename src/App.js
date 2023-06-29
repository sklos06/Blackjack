import React from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import data from "./data"


export default function App() {
    const [cards, setCards] = React.useState(data)
    const [cardsNumber, setCardsNumber] = React.useState(52)
    const [cardsValuePlayer, setCardsValuePlayerPlayer] = React.useState(0)
    const [playerRandomNumber, setPlayerRandomNumber] = React.useState(Math.floor(Math.random() * cardsNumber))
    const [croupierRandomNumber, setCroupierRandomNumber] = React.useState(Math.floor(Math.random() * cardsNumber))


    const [playerCards, setPlayerCards] = React.useState([{
        url: cards[playerRandomNumber].url,
        value: cards[playerRandomNumber].value,
        id: cards[playerRandomNumber].id
    }])

    const [croupierCards, setCroupierCards] = React.useState([{
        url: cards[croupierRandomNumber].url,
        value: cards[croupierRandomNumber].value,
        id: cards[croupierRandomNumber].id
    }, {
        id: 53,
        url: "./Cards/deck.png",
        value: 0
    }])


    function drawCard() {

        setPlayerCards(() => {
            return [
                ...playerCards,
                {
                    url: cards[playerRandomNumber].url,
                    value: cards[playerRandomNumber].value,
                    id: cards[playerRandomNumber].id
                }
            ]
        })
    }


    React.useEffect(() => {
        setCardsValuePlayerPlayer(() => {
            let value = 0;
            playerCards.forEach(card => value += card.value)
            return value
        })
        setPlayerRandomNumber(Math.floor(Math.random() * cardsNumber))

    }, [playerCards])


    return (
        <main>
            <Buttons draw={drawCard}/>
            <Board drawnPlayerCards={playerCards} drawnCroupierCards={croupierCards} playerValue={cardsValuePlayer}/>
        </main>
    )
}