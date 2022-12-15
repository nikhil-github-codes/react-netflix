import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
//import sdata from "./Sdata"

import Card from "./Cards";
import sdata from "./Sdata";


// function ncard(val){
//    return(
    
 
//    )
// }

ReactDOM.render(
  <>
  <h1 className="heading-style">List of top Netflix Movies</h1>
  {sdata.map((val)=>{
    return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
      />
    )
   })
  }
  </>
 
 ,
  document.getElementById('root')
);