import React, { useState, useEffect } from "react";
import Title from './components/Title'
import Explanation from './components/Explanation'
import APOD from './components/APOD'

import "./App.css";

const API_KEY = "DIYt1V1KVtpEOn5xlJmh8rljEJNPDIU0rOT25xBF"

function App() {
  const [ photoOfTheDay, setPhotoOfTheDay ] = useState({
    title: '',
    url: '',
    explanation: '',
    hdurl: '',
    date: ''
  })

  return (
    <div className="App">
      <Title 
        text="Astronomical Photo of the Day 🚀" 
        size="h1"
      />
      {/* APOD = "Astronomical Photo of the Day" */}
      
      <APOD 
        url={photoOfTheDay.url}
        hdurl={photoOfTheDay.hdurl}
        caption={photoOfTheDay.title}
      /> 
      <Explanation text={photoOfTheDay.explanation}/>
    </div>
  );
}

export default App;
