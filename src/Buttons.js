import React from "react"

export default function Buttons(props){
    return(
        <div className="buttons">
            <button className="buttons-button" id="hit" onClick={props.draw} >HIT</button>
            <button className="buttons-button" id="stand" onClick={props.stand}>STAND</button>
            <button className="buttons-button" id="reset" onClick={() => window.location.reload(false)}>RESET</button>
        </div>
    )
}