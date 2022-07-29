import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'
const AddUser=(props)=>{

    const [enteredUser,setEnteredUser]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const[error,setError]=useState();
    const submitHandler=(event)=>{
        event.preventDefault();
        if(enteredUser.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'invalid Input',
                message:'Please enter a valid name and age'
            });
        }
        if(+enteredAge<1){
            setError({
                title:'invalid Input',
                message:'Please enter a valid name and age'
            });        }
        props.onAddUser(enteredUser,enteredAge)
        // console.log(enteredAge,enteredUser)
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
        <div>
            {error && <ErrorModal title={error.title} message={error.message}></ErrorModal>}
          {/* <ErrorModal title='errortitle' message='errormessage'></ErrorModal> */}

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
      </div>
      )
};
export default AddUser;