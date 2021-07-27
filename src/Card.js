import React from 'react';
import Images from './images';
import Heading from './Heading';

function Card(props){
  
    return (
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc}/>
          <div className="card__info">
            <Heading />
            <span className="card__category">{props.title} </span>

            
            
            <a href={props.links} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
  
        </div>
      </div>
  
    )
  }
  export default Card;
  