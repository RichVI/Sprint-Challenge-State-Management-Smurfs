import React from 'react';
import './SmurfCard.scss'

export const SmurfCard = props => {
    console.log("SmurfCard props", props)
    return(
        <div className="smurfCard">
            <p>{props.smurfs.name}</p>
            <p>{props.smurfs.age}</p>
            <p>{props.smurfs.height}</p>
        </div>
    )
}