import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

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
            <TextField required type="date" id="outlined-basic" helperText="Start Date" variant="outlined" onChange={handleStart}/>
            <TextField required type="date" id="outlined-basic" helperText="End Date" variant="outlined" onChange={handleEnd}/><br></br><br></br>
            
            <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="type"
                value={userInfo.education.type}
                label="Type"
                onChange={handleType}
                >
                <MenuItem value={'High School Diploma'}>High School Diploma</MenuItem>
                <MenuItem value={'Bachelor Degree'}> Bachelor's Degree</MenuItem>
                <MenuItem value={'College Diploma'}>College Diploma</MenuItem>
                <MenuItem value={'Master degree'}>Master's Degree</MenuItem>
                <MenuItem value={'PhD'}>PhD</MenuItem>
                </Select>
            </FormControl>
            
            <br></br>
            <Button variant="text" onClick={() => {console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Profile;