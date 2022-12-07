import Axios from "axios";
import './App.css';
import React, {useState} from 'react';

function App() {
    const [usernamereg,setusernamereg] = useState("");
    const [passwordreg,setpasswordreg] = useState("");

    const register = () => {
      Axios.post("http://localhost:3001/register",{
        username : usernamereg,
        password : passwordreg,
      }
      ).then((response)=>{
        console.log(response);
      });
    };


  return (
  
      <>
      <div className="container pt-4  ">
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control form-control" onChange={(e)=>{
            setusernamereg(e.target.value);
          }} placeholder="Enter Username"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control form-control" onChange={(e)=>{
            setpasswordreg(e.target.value);
          }} placeholder="Enter Password"/>  
        </div>
        <div className="form-group pt-2">
        <button type="button" className="btn btn-outline-primary col-12" onClick={register}>SignUp</button>
        </div>
      </form>
      </div>
      </>
    
  );
}



export default App;
