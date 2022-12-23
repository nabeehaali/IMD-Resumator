import React, {useContext} from "react";
import { UserContext, NextContext3 } from "../SubPages/Form";
import {TextField, Button, Box} from '@mui/material';
import { useForm } from "react-hook-form";

//Nabeeha Ali: This form consists of text fields with text and date data types for the user to input their work experience. The data entered gets saved in the userInfo useState variable from the Form.js file. Form validation was completed by another member of the group.
function Education()
{
  const{handleSubmit} = useForm();

    const { userInfo, setUserInfo } = useContext(UserContext);
    const { showNext3, setShowNext3 } = useContext(NextContext3);

    const[ExpTitleValue,ExpTitlechange]=React.useState('');
    const[ExpTitleError,ExpTitlechangeError]=React.useState(false);

    const[companyValue,companyechange]=React.useState('');
    const[companyError,companychangeError]=React.useState(false);

    const[ExpStartValue,ExpStartchange]=React.useState('');
    const[ExpStartError,ExpStartchangeError]=React.useState(false);

    const[ExpEndValue,ExpEndchange]=React.useState('');
    const[ExpEndError,ExpEndchangeError]=React.useState(false);

    const[ActivitydValue,Activitychange]=React.useState(''); 
    const[ActivityError,ActivitychangeError]=React.useState(false);
   
    const onSubmit=(e)=>{
      ExpTitlechangeError(false);
      companychangeError(false);
      ExpEndchangeError(false);
      ExpStartchangeError(false);
      ActivitychangeError(false);

    const formData={ExpTitleValue,companyValue,ExpStartValue,ExpEndValue,ActivitydValue};

  
    if(ExpTitleValue === ''){
      ExpTitlechangeError(true);
     /* window.alert("Data Input Required");*/
    }
    if(companyValue === ''){
      companychangeError(true);
     
    }
    if(ExpStartValue === ''){
      ExpStartchangeError(true);
   
    }
    if(ExpEndValue === ''){
      ExpEndchangeError(true);
   
    }
    if(ActivitydValue === ''){
      ActivitychangeError(true);
     
    }else{
      window.alert("Data Saved!");
      setShowNext3(false);
    }
    
  }

    function handleExpTitle(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              title: e.target.value
          }
        }));
        ExpTitlechange(e.target.value);
      }

      function handleCompany(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              company: e.target.value
          }
        }));
        companyechange(e.target.value);
      }

      function handleExpStart(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              start: e.target.value
          }
        }));
        ExpStartchange(e.target.value);
      }

      function handleExpEnd(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              end: e.target.value
          }
        }));
        ExpEndchange(e.target.value);
      }

      function handleActivity(e) {
        setUserInfo((previous)=>({
            ...previous,
          experience: {...previous.experience,
              activities: e.target.value
          }
        }));
        Activitychange(e.target.value);
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off" >
            <TextField required id="outlined-basic" 
            label="Job Title" 
            variant="outlined" 
            onChange={handleExpTitle} 
            value={ExpTitleValue} error={ExpTitleError}/>

            <TextField required id="outlined-basic" 
            label="Company Name" 
            variant="outlined" 
            onChange={handleCompany} 
            value={companyValue} error={companyError}/>
            <br></br>

            <TextField required type="date" 
            id="outlined-basic" helperText="Start Date" 
            variant="outlined" 
            onChange={handleExpStart} 
            value={ExpStartValue} error={ExpStartError}/>

            <TextField required type="date" id="outlined-basic" 
            helperText="End Date" 
            variant="outlined" 
            onChange={handleExpEnd} 
            value={ExpEndValue} error={ExpEndError}/>

            <TextField required id="outlined-basic" fullWidth multiline rows={5} 
            label="Activities" variant="outlined" 
            onChange={handleActivity} 
            value={ActivitydValue} error={ActivityError}/>

            <Button variant="text" onClick={() => {onSubmit();}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Education;