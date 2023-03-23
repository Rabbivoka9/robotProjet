import Forme from "./forme"
import Form2 from "./forme2"
import { Link } from 'react-router-dom'
import Card from "./Card"

function Contenaire(props){
    return <div className="contenaire">
        <h1>Amis des Robots</h1>
        {/* <Card/> */}
        <input placeholder="Recherche par nom" type="text" />
        <div className="cont">
            <Forme/>
            <Forme/>
            <Forme/>
            <Forme/>  
        </div>
        <div className="cont">
            <Forme/>
            <Forme/>
            <Forme/>
            <Forme/>  
        </div>
        <div className="cont">
            <Forme/>
            <Forme/>
        </div>
        
        

        
        
       
    </div>
}
export default Contenaire

