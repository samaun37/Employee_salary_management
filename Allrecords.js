import { useState, useEffect } from 'react';
import Axios from "axios";
import Card from './Card2';
import classes from './Allrecords.module.css';

const AllrecordsPage = () => {
  const [empList, setempList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/showrecords").then((res) => {
      console.log(res.data);
      setempList(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 style={{ color: "green" }}>All records</h1>

        {empList.map((val, key) => {
          return (
            
     
           
                <div className={classes.signupcustom}>
                  <h3>Name: {val.name}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Department: {val.department}</h3>
                  <h3>Salary: {val.salary}</h3>
                </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllrecordsPage;
/*
const dummy = [
  {
    id: 'm1',
    Name: 'ABCDE FGHIJK',
    Age: '33',
    Department: 'marketing',
    Salary: '40000',
  },
  {
    id: 'm2',
    Name: 'DEFGH IJKL',
    Age: '23',
    Department: 'sales',
    Salary: '42000',
  },
  {
    id: 'm3',
    Name: 'GZXTGD KLIOS',
    Age: '23',
    Department: 'management',
    Salary: '50000',
  },
  {
    id: 'm4',
    Name: 'ALICE IJKL',
    Age: '23',
    Department: 'sales',
    Salary: '40000',
  },
  {
    id: 'm2',
    Name: 'BOB IJKL',
    Age: '23',
    Department: 'marketing',
    Salary: '45000',
  },
];
*/
