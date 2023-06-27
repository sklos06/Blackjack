import React from "react"
import Card from "./Card"
import data from "./data"

export default function Board() {
    return (
        <div className="board">
            <div className="board-cards"><Card cardUrl={data[0].url}/></div>
            <div className="board-center">
                <h1 className="board-title">BLACKJACK</h1>
                <img className="card" alt="deck" src="./Cards/deck.png"/>
            </div>
            <div className="board-cards"><Card cardUrl={data[17].url}/></div>
        </div>
    )
}