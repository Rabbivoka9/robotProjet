import React,{useState} from "react";
import Modal from "./Poppup";
import Popup from "./Poppup";


function Card({robo}){
    const [openModal,setOpenModal]=useState(false)
    
    return (
        <div className="card">
             <img className="ig" src={`https://robohash.org/${robo.name}.png`}/>
            <h3 className="tex" >{robo.name}</h3>
            <h5 className="tex1" >{robo.email}</h5>
            <Popup name={robo.name} email= {email} /> 
            
        </div>
        
    )
}
export default Card;