import React from 'react';
import './nexButton.css';

const nexButton = (props) => {
    return (
        <div onClick={props.onClick} className="nextButton">
        下一条
        </div>
    )
}

export default nexButton;