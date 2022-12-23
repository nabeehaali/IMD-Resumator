import React, {useContext} from "react";
import { UserContext, NextContext2 } from "../SubPages/Form";
import {TextField, Button, Box, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

//Nabeeha Ali: This form consists of text fields and a dropdown menu for the user to inout their education experience. The data entered gets saved in the userInfo useState variable from the Form.js file. Form validation was completed by another member of the group.
function Profile()
{
    const { userInfo, setUserInfo } = useContext(UserContext);
    const { showNext2, setShowNext2 } = useContext(NextContext2);

    const[titleValue, titlechange]=React.useState('');
    const[titleError,titlechangeError]=React.useState(false);

    const[institutionValue, institutionchnage]=React.useState('');
    const[institutionError,institutionchangeError]=React.useState(false);

    const[startValue, startchange]=React.useState('');
    const[startError,starthangeError]=React.useState(false);

    const[endValue, endchange]=React.useState('');
    const[endError,endchangeError]=React.useState(false);

    const[typeValue, typechange]=React.useState('');
    const[typeError,typechangeError]=React.useState(false);

    const onSubmit=(e)=>{
        titlechangeError(false);
        institutionchangeError(false);
        starthangeError(false);
        endchangeError(false);
        typechangeError(false);
    

    const formData={titleValue,institutionValue,startValue,endValue,typeValue};

    if(titleValue === ''){
        titlechangeError(true);
       /* window.alert("Data Input Required");*/
      }
      if(institutionValue === ''){
        institutionchangeError(true);
       
      }
      if(startValue === ''){
        starthangeError(true);
     
      }
      if(endValue === ''){
        endchangeError(true);
     
      }
      if(typeValue === ''){
        typechangeError(true);
       
      } else{
        window.alert("Data Saved!");
        setShowNext2(false);
      }
    }

    function handleMajor(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                title: e.target.value
            }
        }));
        titlechange(e.target.value);
    }

    function handleInstitution(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                institution: e.target.value
            }
        }));
        institutionchnage(e.target.value);
    }

    function handleStart(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                start: e.target.value
            }
        }));
        startchange(e.target.value);
    }

    function handleEnd(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                end: e.target.value
            }
        }));
        endchange(e.target.value);
    }

    function handleType(e) {
        setUserInfo((previous)=>({
            ...previous,
            education: {...previous.education,
                type: e.target.value
            }
        }));
        typechange(e.target.value);
    }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" label="Major" variant="outlined" onChange={handleMajor}
             value={titleValue} error={titleError}/>

            <TextField required id="outlined-basic" label="Institution Name" variant="outlined" onChange={handleInstitution}
             value={institutionValue} error={institutionError}/><br></br>

            <TextField required type="date" id="outlined-basic" helperText="Start Date" variant="outlined" onChange={handleStart}
             value={startValue} error={startError}/>

            <TextField required type="date" id="outlined-basic" helperText="End Date" variant="outlined" onChange={handleEnd}
             value={endValue} error={endError}/><br></br><br></br>
            
            <FormControl sx={{  width: 300}}>
                <InputLabel id="demo-simple-select-label" >Type</InputLabel>
            
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="type"
                value={typeValue} error={typeError}
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
            <Button variant="text" onClick={() => {onSubmit();}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Profile;