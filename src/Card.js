import React from "react"


export default function Card(props) {
    return (
        <img className="card" alt="card" src={props.cardUrl}/>
    )
}