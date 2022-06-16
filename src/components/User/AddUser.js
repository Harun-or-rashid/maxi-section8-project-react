import React from "react";

const AddUser=(props)=>{
    const submitHandler=(event)=>{
        event.preventDefault();
    };

      return(
      <div>
     <form onSubmit={submitHandler}>
     <label for="username">User Name</label>
        <input id="username" type="text"/>

        <label for="age">Age</label>
        <input id="age" type="number"/>

        <button type="submit">Add User</button>
     </form>
      </div>)
};
export default AddUser;