import React from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { MdOutlineMessage, MdMessage } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { useState } from "react";
import './quoteCard.css';

const Card = (props) => {
    const [favorited, setfavorited] = useState(false);
    const [linked, setLinked] = useState(false);
    return (
        <div className="card">
            {props.isLoading ? (
                <div className="text">
                    <div className="mainContent">{props.value.hitokoto}</div>
                    <div className="stausBar">
                    <div className='stausBarButton'>
                            { favorited ? (
                                <MdOutlineFavorite className="textFavoritedButton" onClick={e => setfavorited(false)} />
                            ) : (
                                <MdOutlineFavoriteBorder className="textFavoriteButton" onClick={e => setfavorited(true)}/>
                            )}
                            { linked ? (
                                <MdMessage 
                                    className="textMessageButton" 
                                    onClick={() => {
                                        setLinked(false);
                                        const card = document.querySelector('.card');
                                        card.classList.remove("expand")
                                    }} 

                                />
                            ) : (
                                <MdOutlineMessage 
                                    className="textMessageButton" 
                                    onClick={() => {
                                        setLinked(true);
                                        const card = document.querySelector('.card');
                                        card.classList.add("expand")
                                    }} 
                                />
                            )}
                            <MdOutlineShare className="textShareButton"/>
                        </div>
                    <div className="contentSource">{props.value.from}</div>
                    </div>
                </div>
            ) : (
                <div className="text">
                    <div className="mainContent">一言足以慰风尘</div>
                    <div className="stausBar">
                        <div className='stausBarButton'>
                            { favorited ? (
                                <MdOutlineFavorite className="textFavoritedButton" onClick={e => setfavorited(false)} />
                            ) : (
                                <MdOutlineFavoriteBorder className="textFavoriteButton" onClick={e => setfavorited(true)}/>
                            )}
                            { linked ? (
                                <MdMessage 
                                    className="textMessageButton" 
                                    onClick={() => {
                                        setLinked(false);
                                        const card = document.querySelector('.card');
                                        card.classList.remove("expand")
                                    }} 

                                />
                            ) : (
                                <MdOutlineMessage 
                                    className="textMessageButton" 
                                    onClick={() => {
                                        setLinked(true);
                                        const card = document.querySelector('.card');
                                        card.classList.add("expand")
                                    }} 
                                />
                            )}
                            <MdOutlineShare className="textShareButton"/>
                        </div>
                        <div className="contentSource">Wqiy</div> 
                    </div>
                </div>
            )}    
        </div>
    )
}

export default Card;