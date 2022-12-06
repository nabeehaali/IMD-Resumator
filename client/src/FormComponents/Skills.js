import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {FormControl, InputLabel, Box, Select, MenuItem, Button} from '@mui/material';

function Skills()
{
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleSkills(e) {
        setUserInfo((previous)=>({
            ...previous,
            [e.target.name]: e.target.value
        }));
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
          value={userInfo.comSkills}
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
          value={userInfo.designSkills}
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
          value={userInfo.techSkills}
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
    <Button variant="text" onClick={() => {console.log(userInfo);}} > Save Information </Button>
        </div>
    )
}

export default Skills;
