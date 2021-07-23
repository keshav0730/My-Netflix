import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import "./index.css";
import Sdata from "./Sdata";



ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 10 Netflix Series in All Time</h1>

    <Card
      
      
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      links={Sdata[0].links} />

    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      links={Sdata[1].links} />


    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      links={Sdata[2].links} />

<Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      links={Sdata[3].links} />
      <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      links={Sdata[4].links} />

<Card
      imgsrc={Sdata[5].imgsrc}
      title={Sdata[5].title}
      sname={Sdata[5].sname}
      links={Sdata[5].links} />

<Card
      imgsrc={Sdata[6].imgsrc}
      title={Sdata[6].title}
      sname={Sdata[6].sname}
      links={Sdata[6].links} />

<Card
      imgsrc={Sdata[7].imgsrc}
      title={Sdata[7].title}
      sname={Sdata[7].sname}
      links={Sdata[7].links} />

      <Card
      imgsrc={Sdata[8].imgsrc}
      title={Sdata[8].title}
      sname={Sdata[8].sname}
      links={Sdata[8].links} />

  </>
  
  ,
  document.getElementById('root')
);

