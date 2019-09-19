import React, { useState, useEffect} from "react";
import "./App.css";
import { Route } from "react-router-dom";
import TeamsList from "../src/Components/TeamsList";
import Form from "./Components/Form";
import uuid from "uuid";

const initialTeam = [
  {
    id: uuid(),
    name: "Mildred",
    role: "Backend Engineer",
    email: "otieno.awuor.m@gmail.com"
  },
  {
    id: uuid(),
    name: "Amina",
    role: "Frontend Engineer",
    email: "amina@fret.com"
  },
  {
    id: uuid(),
    name: "Baraka",
    role: "UX designer",
    email: "baraka@xdesigns.com"
  }
];

const initialMember = {
  id: '',
  name: '',
  email: '',
  role: '',
};

function App() {
  const [teamList, setTeamList] = useState(initialTeam);
  const [currentUser, setCurrentUser] = useState({});
  const [memberToEdit, setMemberToEdit] = useState(initialMember);

  
  const onMemberChange = (event) => {
    event.preventDefault();
     for(let  i= 0; i < teamList.length; i++) {
       if(teamList[i].id === event.target.id) {
        setCurrentUser(teamList[i]);
        const newMember = {
          name: teamList[i].name,
          email: teamList[i].email,
          role: teamList[i].role,
        };
        console.log(" Current user set",currentUser)
        console.log("button was clicked", event.target.id)
        const newTeamList = teamList.concat(newMember);
        setTeamList(newTeamList);
        setMemberToEdit(newMember);
       }
       return `New user`;
     }
   
    
    };

  const onNameChange = event => {
    setTeamList([
      { name: event.target.value, email: teamList.email, role: teamList.role }
    ]);
  };

  const onEmailChange = event => {
    setTeamList([
      { name: teamList.name, email: event.target.value, role: teamList.role }
    ]);
  };

  const onRoleChange = event => {
    setTeamList([
      { name: teamList.name, email: teamList.email, role: event.target.value }
    ]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Route
        render={props => (
          <TeamsList
            {...props}
            initialTeam={initialTeam}
            onMemberChange={onMemberChange}
          ></TeamsList>
        )}
      ></Route>
      <Route
        render={props => (
          <Form
            {...props}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onRoleChange={onRoleChange}
            memberToEdit={memberToEdit}
          ></Form>
        )}
      ></Route>
    </div>
  );
}

export default App;
