import React from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1em;
  justify-content: space-between;
  align-items: center;
  background-color: #135058;
  margin-bottom: 0;
  border-radius: 0.8em;
`;
const InputStyled = styled.input`
  margin: 1em;
  padding: 1em;
  width: 60%;
`;

const Form = props => {
  const { onNameChange, onEmailChange, onRoleChange, memberToEdit } = props;
  return (
    <FormStyled>
      <label> Name</label>
      <InputStyled
        value={memberToEdit.name}
        type="text"
        placeholder="name"
        onChange={onNameChange}
      ></InputStyled>
      <label>Email</label>
      <InputStyled
        value={memberToEdit.email}
        placeholder="email"
        onChange={onEmailChange}
      ></InputStyled>
      <label>Role</label>
      <InputStyled
        value={memberToEdit.role}
        type="text"
        placeholder="role"
        onChange={onRoleChange}
      ></InputStyled>
    </FormStyled>
  );
};

export default Form;
