import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './GameCard.css';

const GameCard = ({ id, image, imageOnHover, title, description }) => {
    const [state, setState] = useState({ backgroundImage: `url(${image})` })
    const [display, setDisplay] = useState({ display: 'none' })

    const handleMouseEnter = () => {
        setState({
            backgroundImage: `url(${imageOnHover})`
        })
        setDisplay({
            display: 'block'
        })
    };
    
    const handleMouseLeave = () => {
        setState({
            backgroundImage: `url(${image})`
        })
        setDisplay({
            display: 'none'
        })
    };

    return(
        <div id={id} className="game-box d-flex flex-column justify-content-between p-2" 
            style={state}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <div className="game-box-title text-center pt-3">
                {title}
            </div>
            <div className="game-box-detail" style={display}>
                <FontAwesomeIcon icon={faDownload}/> <span>{description}</span>
            </div>
        </div>
    )
}

export default GameCard