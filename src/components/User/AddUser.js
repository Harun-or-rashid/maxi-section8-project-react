import React from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
const AddUser=(props)=>{
    const submitHandler=(event)=>{
        event.preventDefault();
    };

      return(
         <Card>
      
     <form onSubmit={submitHandler}>
     <label className="classes.inputlabel" for="username">User Name</label>
        <input className={classes.input} id="username" type="text"/>

        <label for="age">Age</label>
        <input className={classes.input} id="age" type="number"/>

        <button type="submit">Add User</button>
     </form>
     
      </Card>
      )
};
export default AddUser;