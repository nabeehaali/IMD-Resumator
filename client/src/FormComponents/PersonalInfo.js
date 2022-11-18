import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box} from '@mui/material';

function Output()
{
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleFName(e) {
        setUserInfo((previous)=>({
            ...previous,
          Fname: e.target.value
        }));
      }

      function handleLName(e) {
        setUserInfo((previous)=>({
            ...previous,
          Lname: e.target.value
        }));
      }

      function handleEmail(e) {
        setUserInfo((previous)=>({
            ...previous,
          email: e.target.value
        }));
      }

      function handlePhone(e) {
        setUserInfo((previous)=>({
            ...previous,
          phone: e.target.value
        }));
      }

      function handleLocation(e) {
        setUserInfo((previous)=>({
            ...previous,
          location: e.target.value
        }));
      }
      
      function handleWebsite(e) {
        setUserInfo((previous)=>({
            ...previous,
          linkedin: e.target.value
        }));
      }
      
      function handlePortfolio(e) {
        setUserInfo((previous)=>({
            ...previous,
          portfolio: e.target.value
        }));
      }

      function handleSummary(e) {
        setUserInfo((previous)=>({
            ...previous,
          summary: e.target.value
        }));
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="First Name" variant="outlined" onChange={handleFName}/>
            <TextField required id="outlined-basic" label="Last Name" variant="outlined" onChange={handleLName}/><br></br>
            <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail}/>
            <TextField required id="outlined-basic" label="Phone" variant="outlined" onChange={handlePhone}/>
            <TextField required id="outlined-basic" fullWidth label="Location" variant="outlined" onChange={handleLocation}/>
            <TextField required id="outlined-basic" label="LinkedIn URL" variant="outlined" onChange={handleWebsite}/>
            <TextField required id="outlined-basic" label="Portfolio URL" variant="outlined" onChange={handlePortfolio}/><br></br>
            <TextField required id="outlined-basic" fullWidth label="Professional Summary"  multiline rows={5} variant="outlined" onChange={handleSummary}/>
            <Button variant="text" onClick={() => {window.alert("Data Saved!"); console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Output;