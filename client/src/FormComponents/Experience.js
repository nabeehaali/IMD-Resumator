import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box} from '@mui/material';

function Education()
{
        
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleExpTitle(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              title: e.target.value
          }
        }));
      }

      function handleCompany(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              company: e.target.value
          }
        }));
      }

      function handleExpStart(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              start: e.target.value
          }
        }));
      }

      function handleExpEnd(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              end: e.target.value
          }
        }));
      }

      function handleActivity(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              activities: e.target.value
          }
        }));
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="Job Title" variant="outlined" onChange={handleExpTitle}/>
            <TextField required id="outlined-basic" label="Company Name" variant="outlined" onChange={handleCompany}/><br></br>
            <TextField required type="date" id="outlined-basic" helperText="Start Date" variant="outlined" onChange={handleExpStart}/>
            <TextField required type="date" id="outlined-basic" helperText="End Date" variant="outlined" onChange={handleExpEnd}/>
            <TextField required id="outlined-basic" fullWidth multiline rows={5} label="Activities" variant="outlined" onChange={handleActivity}/>
            <Button type="submit" variant="text" onClick={() => {window.alert("Data Saved!"); console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Education;