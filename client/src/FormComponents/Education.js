import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box} from '@mui/material';

function Profile()
{
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleMajor(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                title: e.target.value
            }
        }));
    }

    function handleInstitution(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                institution: e.target.value
            }
        }));
    }

    function handleStart(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                start: e.target.value
            }
        }));
    }

    function handleEnd(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                end: e.target.value
            }
        }));
    }

    function handleType(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                type: e.target.value
            }
        }));
    }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="Major" variant="outlined" onChange={handleMajor}/>
            <TextField required id="outlined-basic" label="Institution Name" variant="outlined" onChange={handleInstitution}/><br></br>
            <TextField required id="outlined-basic" label="Start Date" variant="outlined" onChange={handleStart}/>
            <TextField required id="outlined-basic" label="End Date" variant="outlined" onChange={handleEnd}/>
            <TextField required id="outlined-basic" label="Type" variant="outlined" onChange={handleType}/>
            <Button type="submit" variant="text" onClick={() => {window.alert("Data Saved!"); console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Profile;