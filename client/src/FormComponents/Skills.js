import React, {useContext} from "react";
import { UserContext, NextContext4 } from "../SubPages/Form";
import {FormControl, InputLabel, Box, Select, MenuItem, Button} from '@mui/material';

//Nabeeha Ali: This form consists of dropdowns where the user selects their strongest skill in different categories. The data entered gets saved in the useState variable from the Form.js file. Form validation was completed by another member of the group.
function Skills()
{
    const { userInfo, setUserInfo } = useContext(UserContext);
    const { showNext4, setShowNext4 } = useContext(NextContext4);

    const[InterpersonalValue,Interpersonalchange]=React.useState('');
    const[InterpersonalError,InterpersonalchangeError]=React.useState(false);

    const[DesignValue,Designchange]=React.useState('');
    const[DesignError,DesignchangeError]=React.useState(false);

    const[TechnicalValue,Technicalchange]=React.useState('');
    const[TechnicalError,TechnicalchangeError]=React.useState(false);

    const onSubmit=(e)=>{
      InterpersonalchangeError(false);
      DesignchangeError(false);
      TechnicalchangeError(false);

      const formData={InterpersonalValue,DesignValue,TechnicalValue};

      if(InterpersonalValue === ''){
        InterpersonalchangeError(true);
       /* window.alert("Data Input Required");*/
      }
      if(DesignValue === ''){
        DesignchangeError(true);
       
      }
      if(TechnicalValue === ''){
        TechnicalchangeError(true);
     
      } else{
        window.alert("Data Saved!");
        setShowNext4(false);
      }
  }
    function handleSkills(e) {
        setUserInfo((previous)=>({
            ...previous,
            [e.target.name]: e.target.value
        }));
       if(e.target.name === "comSkills"){
        Interpersonalchange(e.target.value);
       }
       if(e.target.name === "designSkills"){
        Designchange(e.target.value);
       }
       if(e.target.name === "techSkills"){
        Technicalchange(e.target.value);
       }
      }

    return(
        <div>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Strongest Interpersonal Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="comSkills"
          value={InterpersonalValue} 
          error={InterpersonalError}
          label="Strongest Interpersonal Skill"
          onChange={handleSkills}
          
        >
          <MenuItem value={'Time Management'}>Time Management</MenuItem>
          <MenuItem value={'Problem Solving'}>Problem Solving</MenuItem>
          <MenuItem value={'Leadership'}>Leadership</MenuItem>
          <MenuItem value={'Attention to Detail'}>Attention to Detail</MenuItem>
          <MenuItem value={'Communication'}>Communication</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br></br>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Strongest Design Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="designSkills"
          value={DesignValue} 
          error={DesignError}
          label="Strongest Design Skill"
          onChange={handleSkills}
        >
          <MenuItem value={'3D Modelling'}>3D Modelling</MenuItem>
          <MenuItem value={'Pixel Art'}>Pixel Art</MenuItem>
          <MenuItem value={'Graphic Design'}>Graphic Design</MenuItem>
          <MenuItem value={'UI/UX Design'}>Ui/UX Design</MenuItem>
          <MenuItem value={'Illustration'}>Illustration</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br></br>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Strongest Technical Skill</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="techSkills"
          value={TechnicalValue} 
          error={TechnicalError}
          label="Strongest Technical Skill"
          onChange={handleSkills}
        >
          <MenuItem value={'Game Development'}>Game Development</MenuItem>
          <MenuItem value={'Web Development'}>Web Development</MenuItem>
          <MenuItem value={'Mobile Development'}>Mobile Development</MenuItem>
          <MenuItem value={'Frontend Development'}>Frontend Development</MenuItem>
          <MenuItem value={'Backend Development'}>Backend Development</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button variant="text" onClick={() => {onSubmit(); }} > Save Information </Button>
        </div>
    )
}

export default Skills;
