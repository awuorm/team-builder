import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import TeamsList from "../src/Components/TeamsList";

 const initialTeam = [
  {name: "Mildred",
    teamname: "Kiboko",
    score: "10"  
},
{name: "Amina",
    teamname: "Simba",
    score: "0"  
},
{name: "Barak",
    teamname: "Farasi",
    score: "4"  
}
]

function App() {
  const [teamList, setTeamList] = useState(initialTeam);
  return (
    <div className="App">
      <Route render={(props) => <TeamsList {...props} initialTeam={initialTeam}></TeamsList>}></Route>
    </div>
  );
}

export default App;
