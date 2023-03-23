
function Card({robo , index}){
    
    return (
        <div className="card">
             <img className="ig" src={`https://robohash.org/${robo.name}.png`}/>
            <h3 className="tex" key={index}>{robo.name}</h3>
            <h5 className="tex1" key={index}>{robo.email}</h5>

           
        </div>
        
        
    )
}
export default Card;