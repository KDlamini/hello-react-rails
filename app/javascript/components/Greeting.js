import React, { useState, useEffect} from "react"
import axios from "axios";

const Greeting = () => {
  const [ greetings, setGreetings ] = useState([]);
  const greeting = greetings[Math.floor(Math.random()*greetings.length)];

  useEffect(() => {
    axios.get('api/v1/greetings.json')
    .then(resp => {
      setGreetings(resp.data.data);
    })
    .catch(resp => console.log(resp))
    
  }, [greetings.length]);

  return (
    <div>
    {
      greeting? greeting.attributes.greeting : "Loading..."
    }
    </div>
  );
}

export default Greeting
