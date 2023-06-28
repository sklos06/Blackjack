import React from "react"
import Card from "./Card"


export default function Board(props) {
    const playerCards = props.drawnPlayerCards.map(
        card => {
            return <Card key={card.id} value={card.value} cardUrl={card.url}/>
        }
    )
    return (
        <div className="board">
            {/*<div className="board-cards"><Card cardUrl={playerCards[0].ur}/></div>*/}
            <div className="board-center">
                <h1 className="board-title">BLACKJACK</h1>
                <img className="card" alt="deck" src="./Cards/deck.png"/>
            </div>
            <div className="board-cards">
                {playerCards}
            </div>
        </div>
    )
}