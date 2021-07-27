import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";


    
const App=()=>(
  <>
    <h1 className="heading_style">List of Top 10 Netflix Series in All Time</h1>

     {Sdata.map( (val)=>{
       
       return (
        <Card
       
       key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        links={val.links} />

       )
     }) }

    
     
  </>
  
  
  
);

export default App;
