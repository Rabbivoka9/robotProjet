// import image from '../images/robot.jpg'
import { useState, useEffect, useCallback } from 'react';
import Card from './Card';


function Robos() {
    const [data, setDate] = useState(null);
    const [champ, setChamp] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setDate(data);
          setFilteredData(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const handleChange = useCallback(
      (event) => {
        const value = event.target.value;
        setChamp(value);
        if (value.length >= 3) {
          setFilteredData(
            data.filter((robo) => robo.name.startsWith(value.substring(0, 3)))
          );
        } else {
          setFilteredData(data);
        }
      },
      [data]
    );

    return (
      <div className="robots-container">
        <div className="inputRecherche">
          <input
            type="text"
            placeholder="Recherche par nom"
            onChange={handleChange}
            value={champ}
          />
        </div>
        <div className="disposition">
          {data
            && filteredData &&
              filteredData.map((robo) => (
                <Card robo={robo} key={robo.id} />
              ))
            }
        </div>
      </div>
    );
  }
  export default Robos;