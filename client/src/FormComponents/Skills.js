import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";
import {TextField, Button, Box, Autocomplete, Checkbox} from '@mui/material';
import {CheckBoxOutlineBlank, CheckBox} from '@mui/icons-material';

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

function Skills()
{
    const { userInfo, setUserInfo } = useContext(UserContext);

    function handleCommuniationSkills(e) {
        setUserInfo((previous)=>({
            ...previous,
          skills: {
              communication: e.target.value
          }
        }));
      }

      function handleDesignSkills(e) {
        setUserInfo((previous)=>({
            ...previous,
          skills: {
              design: e.target.value
          }
        }));
      }

      function handleTechnicalSkills(e) {
        setUserInfo((previous)=>({
            ...previous,
          skills: {
              technical: e.target.value
          }
        }));
      }

    return(
        <div>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1}, }} noValidate autoComplete="off">
              <Autocomplete
              multiple
              fullWidth
              id="checkboxes-tags-demo"
              options={Com_Skills}
              disableCloseOnSelect
              onChange={handleCommuniationSkills}
              getOptionLabel={(option) => option.skill}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.skill}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Communication Skills" placeholder="Communication Skills" />
              )}
            />
            <Autocomplete
              multiple
              fullWidth
              id="checkboxes-tags-demo"
              options={Design_Skills}
              disableCloseOnSelect
              onChange={handleDesignSkills}
              getOptionLabel={(option) => option.skill}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.skill}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Design Skills" placeholder="Design Skills" />
              )}
            />
            <Autocomplete
              multiple
              fullWidth
              id="checkboxes-tags-demo"
              options={Technical_Skills}
              disableCloseOnSelect
              onChange={handleTechnicalSkills}
              getOptionLabel={(option) => option.skill}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.skill}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Technical Skills" placeholder="Technical Skills" />
              )}
            />
            <Button type="submit" variant="text" onClick={() => {window.alert("Data Saved!"); console.log(userInfo);}} > Save Information </Button>
            </Box>
        </div>
    )
}

export default Skills;

const Com_Skills = [
  { skill: 'Project Management'},
  { skill: 'Communication'},
  { skill: 'Teamwork'},
  { skill: 'Leadership'},
  { skill: 'Problem Solving'},
];

const Design_Skills = [
  { skill: '3D Modelling'},
  { skill: 'Pixel Art'},
  { skill: 'Vector Art'},
  { skill: 'Graphic Design'},
  { skill: 'UI/UX Design'},
];

const Technical_Skills = [
  { skill: 'Game Development'},
  { skill: 'Web Development'},
  { skill: 'Frontend Development'},
  { skill: 'Backend Development'},
  { skill: 'Mobile Development'},
];