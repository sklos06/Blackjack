import React from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import data from "./data"


export default function App() {
    const [playerCards, setPlayerCards] = React.useState([])
    const [cardsValue, setCardsValue] = React.useState(0)

    function drawCard() {
        const randomCard = Math.floor(Math.random() * 52 + 1)
        setPlayerCards(() => {
            return [
                ...playerCards,
                {
                    url: data[randomCard].url,
                    value: data[randomCard].value,
                    id: data[randomCard].id
                }

            ]
        })
    }

    React.useEffect(() => {
        setCardsValue(oldValue => {
            let value = 0;
            playerCards.forEach(card => value += card.value)
            return value
        })
    }, [playerCards])


    return (
        <main>
            <Buttons draw={drawCard}/>
            <Board drawnPlayerCards={playerCards}/>
        </main>
    )
}