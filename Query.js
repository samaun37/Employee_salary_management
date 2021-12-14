import { useRef, useState } from 'react';
import Card from './Card2';
import classes from './Query.module.css';
import React, { Component } from 'react';
import Axios from "axios"
import css from '../pages/Design.module.css'

function Newemployeeform() {

  const [user, setUser] = useState({
    result: [],
  });
  const department_input_ref = useRef();
  function SubmitHandler(event) {
    event.preventDefault();
    const entered_department = department_input_ref.current.value;
    const employee_data = {
      department: entered_department,
      result: '',
    }
    Axios.post("http://localhost:3001/query", employee_data).then(res => {

      setUser({ result: res.data });
      console.log(res.data);
    })

  }
  return (

    <div>
      <Card>
        <form className={classes.form} onSubmit={SubmitHandler} >
          <div className={classes.control}>
            <label htmlFor='department'>Enter Query Department</label>
            <input type='text' placeholder="Department eg, marketing,sales,management" required id='department' ref={department_input_ref} />
          </div>
          <div className={classes.actions}>
            <button> Search </button>
          </div>
        </form>
      </Card>

      
      <div>
            {user.result.map((val, key) => {
                return (
                    <div className={css.signupcustom}
                        style={{ color: 'red', marginTop: '10px' }}
                        key={key}>
                        <h1>Name:{val.name}</h1>
                        <h1>Age:{val.age}</h1>
                        <h1>Salary:{val.salary}</h1>
                    </div>
                );
            })}
        </div>
    </div>

  );
}

export default Newemployeeform;