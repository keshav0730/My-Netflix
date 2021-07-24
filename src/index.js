import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import "./index.css";
import Sdata from "./Sdata";


    
ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 10 Netflix Series in All Time</h1>

     {Sdata.map( (val)=>{
       
       return (
        <Card
      
      
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        links={val.links} />

       )
     }) }

    
     
  </>
  
  ,
  document.getElementById('root')
);

