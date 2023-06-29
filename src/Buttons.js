import React from "react"

export default function Buttons(props){
    return(
        <div className="buttons">
            <button className="buttons-hit" id="hit" onClick={props.draw} >HIT</button>
            <button className="buttons-stand" id="stand" onClick={props.stand}>STAND</button>
        </div>
    )
}