// import image from '../images/robot.jpg'
import { useState, useEffect, useCallback } from 'react';
import Card from './Card';


function Robos (){

    const [data, setDate] = useState(null); 
    const [load, setLoad]= useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => setDate(data))
            .catch(error => console.log(error));    
    }, [data]); 

    const handleChange = useCallback(
        (e) =>{
        setLoad(e.target.value)
        console.log(load);
         }, [data]
    )

    return (
        <div >
            <div>
                <input className='put' placeholder="Recherche par nom" type="text" onChange={handleChange} value={load}/>
            </div>
            <div className='disposition'>
                 {
                 
               data && data.map((user, id)=>{
                    return user ? (
                        < Card robo={user} key={id}/>
                    ) : ( <p>En cour de rechargement ....</p>)
                })
            }
            </div>
           
        </div>
    )
  
}
export default Robos;