import React from "react";
import Card from '../UI/Card'
const AddUser=(props)=>{
    const submitHandler=(event)=>{
        event.preventDefault();
    };

      return(
         <Card>
      
     <form onSubmit={submitHandler}>
     <label for="username">User Name</label>
        <input id="username" type="text"/>

        <label for="age">Age</label>
        <input id="age" type="number"/>

        <button type="submit">Add User</button>
     </form>
     
      </Card>
      )
};
export default AddUser;