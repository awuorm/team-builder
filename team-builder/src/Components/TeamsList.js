import React from "react";
import uuid from "uuid";
import styled from "styled-components";

const TeamStyled = styled.div`
        background-color: #135058;
        padding:1em;
        margin: 1em;
        margin-left: 25%;
        width: 50%;
        border-radius: 0.8em;
`;

const TeamsList = props => {
  const {
    initialTeam,
    onMemberChange,
  } = props;
  return ( 
    initialTeam.map((member) => (
    <TeamStyled>
      <p>Name:{member.name}</p>
      <p>Email:{member.email}</p>
      <p>Role:{member.role}</p>
      <button 
        id={member.id}
        onClick={onMemberChange}
      >Edit
      </button>
    </TeamStyled>))
  )
};

export default TeamsList;
