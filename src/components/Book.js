import React from 'react';
import './Book.css';

function Book(props) {

    return (
        <div className="book">
            <div className="bookContents" id="bookIcon">
                <img src={props.cover} alt="mdzscover"/>
                <div className="bookInfo">
                    <h3>{props.title}</h3>
                    <h4>{props.author}</h4>
                    <h4>{props.rating}</h4>
                    <a href={props.link} target="_blank" rel="noreferrer">Read</a>
                    
                    <div className="details">
                        <h4>read: {props.readDate}</h4>
                        <h4>favorite: {props.favorite}</h4>
                        <h4>angst: {props.angst}</h4>
                        <h4>boring: {props.boring}</h4>
                        <h4>romance: {props.romance}</h4>
                        <h4>humor: {props.humor}</h4>
                        <h4>characters: {props.characters}</h4>
                        <h4>plot: {props.plot}</h4>
                        <h4>world building: {props.world}</h4>
                        <h4>notes: {props.notes}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;