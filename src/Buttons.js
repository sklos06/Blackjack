import React from "react"

export default function Buttons(props){
    return(
        <div className="buttons">
            <button className="buttons-hit" onClick={props.draw}>HIT</button>
            <button className="buttons-stand">STAND</button>
        </div>
    )
}