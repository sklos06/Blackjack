import React from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import data from "./data"


export default function App() {
    const [cards, setCards] = React.useState(data)
    const [cardsNumber, setCardsNumber] = React.useState(52)
    const [cardsValuePlayer, setCardsValuePlayer] = React.useState(0)
    const [cardsValueCroupier, setCardsValueCroupier] = React.useState(0)
    const [playerRandomNumber, setPlayerRandomNumber] = React.useState(Math.floor(Math.random() * cardsNumber))
    const [croupierRandomNumber, setCroupierRandomNumber] = React.useState(Math.floor(Math.random() * cardsNumber))
    const [endPlayerTurn, setEndPlayerTurn] = React.useState(false)


    const hitButton = document.getElementById("hit")
    const standButton = document.getElementById("stand")
    const style = "filter: blur(1.5px)"

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
        setPlayerCards(oldCards => {
            return [
                ...oldCards,
                {
                    url: cards[playerRandomNumber].url,
                    value: cards[playerRandomNumber].value,
                    id: cards[playerRandomNumber].id
                }
            ]
        })

    }

    function drawCardCroupier() {
        setCroupierCards(oldCards => {
            return [
                ...oldCards,
                {
                    url: cards[croupierRandomNumber].url,
                    value: cards[croupierRandomNumber].value,
                    id: cards[croupierRandomNumber].id
                }
            ]
        })

    }

    function stand() {
        hitButton.style = style
        hitButton.disabled = true
        standButton.style = style
        standButton.disabled = true
        setEndPlayerTurn(true)
        setCroupierCards(prevCards => {
            const temporaryArray = prevCards.filter(prev => prev.value !== 0);
            return temporaryArray
        })
    }

    React.useEffect(() => {
        setCardsValuePlayer(() => {
            let value = 0;
            playerCards.forEach(card => value += card.value)
            return value
        })
        setCards(prevCards => {
            const temporaryArray = prevCards.filter(prev => prev.id !== (playerRandomNumber + 1));
            setCardsNumber(prevCardsNumber => {
                return --prevCardsNumber
            })
            return temporaryArray
        })
        setPlayerRandomNumber(Math.floor(Math.random() * cardsNumber))

    }, [playerCards])

    React.useEffect(()=>{
        if(cardsValuePlayer>21){
            hitButton.style = style
            hitButton.disabled = true
        }
    },[playerRandomNumber])

    React.useEffect(() => {
        setCardsValueCroupier(() => {
            let value = 0;
            croupierCards.forEach(card => value += card.value)
            return value
        })

        setCards(prevCards => {
            const temporaryArray = prevCards.filter(prev => prev.id !== (playerRandomNumber + 1));
            setCardsNumber(prevCardsNumber => {
                return --prevCardsNumber
            })
            return temporaryArray
        })

        setCroupierRandomNumber(Math.floor(Math.random() * cardsNumber))

    }, [croupierCards])


    React.useEffect(() => {
        if ((cardsValueCroupier!==21) && (cardsValueCroupier <= cardsValuePlayer) && (cardsValuePlayer !== 0) && endPlayerTurn) {
            drawCardCroupier()
        }
    }, [croupierRandomNumber])

    return (
        <main>
            <Buttons draw={drawCard} stand={stand}/>
            <Board
                drawnPlayerCards={playerCards}
                drawnCroupierCards={croupierCards}
                playerValue={cardsValuePlayer}
                croupierValue={cardsValueCroupier}
            />
        </main>
    )
}