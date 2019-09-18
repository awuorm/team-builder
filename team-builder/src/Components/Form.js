import React from "react";


const Form = (props) => {
const {onNameChange, onEmailChange, onRoleChange} = props;
        debugger;
    return (
        <form>
            <label> Name</label>
            <input type="text" placeholder="name" onChange={onNameChange}></input>
            <label>Email</label>
            <input placeholder="email" onChange={onEmailChange}></input>
            <label>Role</label>
            <input  type="text" placeholder="role" onChange={onRoleChange}></input>
        </form>
    )
}

export default Form;