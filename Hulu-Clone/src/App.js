import React, {useState} from 'react';
import Header from './Header';
import Nav from './Nav';
import Result from './Result';
import './App.css';
import requests from './Request';

function App() {

  const [selectedOption,setSeletedOption] = useState(requests.fetchTrending)
  return (
    <div className='app'>
      <Header />
      <Nav setSeletedOption={setSeletedOption}/>
      <Result selectedOption = {selectedOption}/>
    </div>
  )
}

export default App

