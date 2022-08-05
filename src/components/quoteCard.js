import React from 'react';
// import axios from 'axios';
import './quoteCard.css';

const Card = (props) => {
    return (
        <div className="card">
            {props.isLoading ? (
                <div className="text">
                    <div className="mainContent">{props.value.hitokoto}</div>
                    <div className="contentSource">{props.value.from}</div>
                </div>
            ) : (
                <div className="text">
                    <div className="mainContent">一言足以慰风尘</div>
                    <div className="contentSource">Wqiy</div> 
                </div>
            )}
            
        </div>
    )
}

export default Card;