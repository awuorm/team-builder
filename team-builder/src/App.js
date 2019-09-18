import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import TeamsList from "../src/Components/TeamsList";
import Form from "./Components/Form";

const initialTeam = [
  {
    name: "Mildred",
    role: "Backend Engineer",
    email: "otieno.awuor.m@gmail.com"
  },
  { name: "Amina", role: "Frontend Engineer", email: "amina@fret.com" },
  { name: "Baraka", role: "UX designer", email: "baraka@xdesigns.com" }
];

function App() {
  const [teamList, setTeamList] = useState(initialTeam);

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
      <Route
        render={props => (
          <TeamsList {...props} initialTeam={initialTeam}></TeamsList>
        )}
      ></Route>
      <Route
        render={props => (
          <Form
            {...props}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onRoleChange={onRoleChange}
          ></Form>
        )}
      ></Route>
    </div>
  );
}

export default App;
