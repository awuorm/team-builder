import React from "react";

const TeamsList = (props) => {
    const {initialTeam} = props;
    return (
            initialTeam.map((member) => (
                <>
                <p>Name:{member.name}</p>
                <p>Team Name:{member.teamname}</p>
                <p>Score:{member.score}</p>
                <button>Edit</button>
                </>
            ))
            
     
    )
};

export default TeamsList;