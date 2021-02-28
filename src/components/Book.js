import React from 'react';
import './Book.css';



class Book extends React.Component{
    constructor(props){
        super(props);
        this.cover = props.cover
        this.title = props.title
        this.author = props.author
        this.rating = props.rating
        this.link = props.link
        this.reviews = props.review
        this.readDate = props.readDate
    }
    
    render(){return (
        <div className="book">
            <div className="bookContents" id="bookIcon">
                <img src={this.cover} alt="mdzscover"/>
                <div className="bookInfo" id="bookInfos">
                    <h3>{this.title}</h3>
                    <h4>{this.author}</h4>
                    <h4>{this.rating}</h4>
                    <h4>{this.readDate}</h4>
                    <a href={this.link} target="_blank" rel="noreferrer">Read</a>
                    <p>{this.reviews}</p>
                </div>
            </div>
        </div>
    );}
}

export default Book;