import React, {useContext} from "react";
import { UserContext, NextContext } from "../SubPages/Form";
import { useForm } from "react-hook-form";
import { SettingsInputCompositeTwoTone } from "@material-ui/icons";
import {Button,Box, TextField} from '@mui/material';

//Nabeeha Ali: This form consists of text fields with text, URL, and number data types for the user to input their personal information. The data entered gets saved in the userInfo useState variable from the Form.js file. Form validation was completed by another member of the group.
function Output(){

  const{handleSubmit} = useForm();

    const { userInfo, setUserInfo } = useContext(UserContext);
    const { showNext, setShowNext } = useContext(NextContext);

    const[fnameValue,namechange]=React.useState('');
    const[fnameError,namechangeError]=React.useState(false);

    const[lnameValue,lnamechange]=React.useState('');
    const[lnameError,lnamechangeError]=React.useState(false);

    const[emailValue,emailchange]=React.useState('');
    const[emailError,emailchangeError]=React.useState(false);

    const[phoneValue,phonechange]=React.useState('');
    const[phoneError,phonechangeError]=React.useState(false);

    const[locationValue,locationchange]=React.useState('');
    const[locationError,locationchangeError]=React.useState(false);

    const[linkedinValue,linkedinchange]=React.useState('');
    const[linkedinError,linkedinchangeError]=React.useState(false);

    const[portfolioValue,portfoliochange]=React.useState('');
    const[portfolioError,portfoliochangeError]=React.useState(false);

    const[summaryValue,summarychange]=React.useState('');
    const[summaryError,summarychangeError]=React.useState(false);

    const onSubmit=(e)=>{
      namechangeError(false);
      lnamechangeError(false);
      emailchangeError(false);
      phonechangeError(false);
      locationchangeError(false);
      linkedinchangeError(false);
      portfoliochangeError(false);
      summarychangeError(false);

      const formData={fnameValue,lnameValue,emailValue,phoneValue,locationValue};
       
      if(fnameValue === ''){
        namechangeError(true);
       /* window.alert("Data Input Required");*/
      }
      if(lnameValue === ''){
        lnamechangeError(true);
       
      }
      if(emailValue === ''){
        emailchangeError(true);
     
      }
      if(phoneValue === ''){
        phonechangeError(true);
     
      }
      if(locationValue === ''){
        locationchangeError(true);
       
      }
      if(linkedinValue === ''){
        linkedinchangeError(true);
      
      }
      if(portfolioValue === ''){
        portfoliochangeError(true);
       
      }
      if(summaryValue === ''){
        summarychangeError(true);
     
      } 
      else{
        window.alert("Data Saved!");
        setShowNext(false);
      }
      
     /* if(fnameValue){
        fetch(" http://localhost:3001/contact",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData)
          }).then((res)=>{
            alert('Saved successfully.');
          
            window.location.reload();
          }).catch((err)=>{
            console.log(err.message)
          })
      }*/
    }

    function handleFName(e) {
        setUserInfo((previous)=>({
          ...previous,
        Fname: e.target.value
      }));   
      namechange(e.target.value);
    }

      function handleLName(e) {
        setUserInfo((previous)=>({
            ...previous,
          Lname: e.target.value
        }));
        lnamechange(e.target.value);
      }

      function handleEmail(e) {
        setUserInfo((previous)=>({
            ...previous,
          email: e.target.value
        }));
        emailchange(e.target.value);
      }

      function handlePhone(e) {
        setUserInfo((previous)=>({
            ...previous,
          phone: e.target.value
        }));
        phonechange(e.target.value);
      }

      function handleLocation(e) {
        setUserInfo((previous)=>({
            ...previous,
          location: e.target.value
        }));
        locationchange(e.target.value);
      }
      
      function handleWebsite(e) {
        setUserInfo((previous)=>({
            ...previous,
          linkedin: e.target.value
        }));
        linkedinchange(e.target.value);
      }
      
      function handlePortfolio(e) {
        setUserInfo((previous)=>({
            ...previous,
          portfolio: e.target.value
        }));
        portfoliochange(e.target.value);
      }

      function handleSummary(e) {
        setUserInfo((previous)=>({
            ...previous,
          summary: e.target.value
        }));
        summarychange(e.target.value);
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
            <TextField required id="outlined-basic" 
            label="First Name" variant="outlined" 
            onChange={handleFName} 
            value={fnameValue} 
            error={fnameError}
            />

            <TextField required id="outlined-basic"
             label="Last Name" 
             variant="outlined" 
             onChange={handleLName} 
             value={lnameValue}
              error={lnameError}/>
              <br></br>
              
            <TextField required type="email" id="outlined-basic" 
            label="Email" variant="outlined" 
            onChange={handleEmail} 
            value={emailValue} error={emailError}/>

            <TextField required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="outlined-basic" 
            label="Phone" 
            variant="outlined" 
            onChange={handlePhone}
            value={phoneValue} error={phoneError}/>

            <TextField required id="outlined-basic" fullWidth 
            label="Location" 
            variant="outlined" 
            onChange={handleLocation}
            value={locationValue} error={locationError}/>

            <TextField required type="url" id="outlined-basic" 
            label="LinkedIn URL" 
            variant="outlined" 
            onChange={handleWebsite}
            value={linkedinValue} error={linkedinError}/>

            <TextField required type="url" id="outlined-basic" 
            label="Portfolio URL" 
            variant="outlined" 
            onChange={handlePortfolio}
            value={portfolioValue} error={portfolioError}/>
            <br></br>

            <TextField required id="outlined-basic" fullWidth 
            label="Professional Summary"  multiline rows={5} 
            variant="outlined" 
            onChange={handleSummary}
            value={summaryValue} error={summaryError}/>

            <Button variant="text" onClick={() => {  onSubmit(); }} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Output;