import React from "react"
import Card from "./Card"
export default function Board(){
    return(
        <div className="board">
            <div className="board-cards"><Card/></div>
            <h1 className="board-title">BLACKJACK</h1>
            <div className="board-cards"><Card/></div>
        </div>
    )
}