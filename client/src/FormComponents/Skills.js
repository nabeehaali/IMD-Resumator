import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box} from '@mui/material';

function Skills()
{
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleExpTitle(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {
              title: e.target.value
          }
        }));
      }

      function handleCompany(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {
              company: e.target.value
          }
        }));
      }

      function handleExpStart(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {
              start: e.target.value
          }
        }));
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="Communication Skills" variant="outlined" onChange={handleExpTitle}/>
            <TextField required id="outlined-basic" label="Design Skills" variant="outlined" onChange={handleCompany}/><br></br>
            <TextField required id="outlined-basic" label="Technical Skills" variant="outlined" onChange={handleExpStart}/>
            <Button type="submit" variant="text" onClick={() => {window.alert("Data Saved!"); console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Skills;