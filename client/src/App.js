//import './App.css';
import React from "react"; 
//import Axios from "axios";
//import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ContextTutorial from "./UseContext/contextMT";
//import Form from "./Form.js";
import GetStarted from "./SubPages/Home"
import Output from './FormComponents/Output';


function App() {
  return (
        <div className="App">
     <GetStarted />
    </div>  
  );
}

export default App;

// To use bootstrap you need to run these command
// npm install bootstrap --save 
// npm install --save react-bootstrap-validation

/*function App() {

 const [userName,setUserName] = useState("");
 const [password, setPassword] = useState("");

 const [userList, setUserList] = useState([]);

 const [newPassword, setNewPassword] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setUserList(response.data)
    });
  },[]);

  const sumbitUsername=()=>{
    Axios.post("http://localhost:3001/api/insert",{
      email:userName,
      mypassword:password,
    });
    setUserList([...userList,
    {email:userName,mypassword:password}]);
  };

  const deleteUser=(email)=>{
    Axios.delete(`http://localhost:3001/api/delete/${email}`);
    window.location.reload(false);
  }
  
  const updatePassword=(userName)=>{
    Axios.put("http://localhost:3001/api/update",
    {
    email:userName,
    mypassword:newPassword,});
    setNewPassword("");
    window.location.reload(false);
      }

  return (
    <div className="App"> 
    
    <h1> CRUD Application</h1>
    <div className='form'>
      <label>User Name</label>
    <input type={Text} name='UserName' onChange={(e)=>{
      setUserName(e.target.value)
    }}></input>
    <label>Password</label>
    <input type={Text} name='Password' onChange={(g)=>{
      setPassword(g.target.value)
    }}></input>
    </div>
    <button onClick={sumbitUsername}> Submit</button>
    <div id="tbl">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Email/User Name</th>
          <th>Password</th>
          <th> Edit</th>
        </tr>
      </thead>
      <tbody>
      {userList.map((val)=>{
      return (      
      <tr>
      <td> {val.email}</td>
      <td>{val.mypassword}</td>
      <td>
      <button onClick={()=>{deleteUser(val.email)} }> Delete</button>
      <input type={Text} id="updateInput" onChange={(e)=>{setNewPassword(e.target.value)}}></input>
      <button onClick={()=>{updatePassword(val.email)}}> Update</button>
      </td>
      </tr>)
    })}
      </tbody>
    </Table>
    </div>


    </div>
  );
}*/

/*function App()
{
  const [inputValue, setInputValue] = useState("Nabeeha");
  const [details, setDetails] = useState({name:'', counter:0});
  const [counter, setCounter] = useState(0);

  const changeVal = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  const increaseCounter = () => {
    setDetails({counter:details.counter+1});
    changeName(details.name);
  }

  const changeName = (name1) => {
    setDetails((previous)=>({
      ...previous,
      name: name1
    }));
  }
 
  return (
    <div>
      <input placeholder='enter something...' onChange={(e)=>{changeName(e.target.value)}}/>
      <h1>{details.name} has clicked {details.counter} times!</h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}*/

