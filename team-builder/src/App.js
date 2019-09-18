import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";

const [teamList, setTeamList] = useState([]);

function App() {
  return (
    <div className="App">
      <Route render={() => <TeamsList></TeamsList>}></Route>
    </div>
  );
}

export default App;
