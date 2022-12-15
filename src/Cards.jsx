import React from "react";
function Card(props){
    console.log(props)
    return(
    <div className="cards">
      <div className="card">
       <img className="img-card"src={props.imgsrc}  alt="Avatar" />
       <div className="container">
         <h4><b>{props.title}</b></h4> 
         <p>{props.sname}</p> 
         <a href={props.link} >
             <button> Watch Now</button>
         </a>
        </div>
     </div>

    </div>
    //   <div className="card">
    //   <img className="img-card"src={props.imgsrc}  alt="Avatar" />
    //   <div className="container">
    //     <h4><b>{props.title}</b></h4> 
    //     <p>{props.sname}</p> 
    //     <a href={props.link} >
    //         <button> Watch Now</button>
    //     </a>
    //   </div>
    // </div>
    )
  
  }

  export default Card