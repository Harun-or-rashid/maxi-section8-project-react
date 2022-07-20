import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
const AddUser=(props)=>{

    const [enteredUser,setEnteredUser]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(enteredAge,enteredUser)
        setEnteredUser('');
        setEnteredAge('');
    };
    const addUserHandler=(event)=>{
        setEnteredUser(event.target.value);
    };
    const addAgeHandler=(event)=>{
        setEnteredAge(event.target.value)
    }

      return(
         <Card className={classes.input}>
      
     <form onSubmit={submitHandler}>
     <label  for="username">User Name</label>
        <input 
         id="username" 
         onChange={addUserHandler}
         type="text"
         value={enteredUser}
          />

        <label for="age">Age</label>
        <input 
        className={classes.input} 
        id="age" 
        type="number"
        onChange={addAgeHandler}
         value={enteredAge}
         />

        <Button type="submit"> Add User</Button> 
     </form>
     
      </Card>
      )
};
export default AddUser;