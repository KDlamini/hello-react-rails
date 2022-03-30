import React, { useState,useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/actions/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const greeting = greetings.length ? greetings[0][Math.floor(Math.random()*greetings[0].length)] : '';
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetings());
    }
  }, [greetings]);

  return (
    <div>
    {
      greeting ? (
        greeting.attributes.greeting
      ) : (
        <div>Loading...</div>
      )
    }
    </div>
  );
}

export default Greeting
