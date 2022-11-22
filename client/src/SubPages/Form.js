import React, {useState, createContext} from "react"; 
import {Box, Toolbar, AppBar, Button, Paper, Typography, Stepper, Step, StepLabel} from '@mui/material';
import Personal from '../FormComponents/PersonalInfo';
import Education from '../FormComponents/Education';
import Experience from '../FormComponents/Experience';
import Skills from '../FormComponents/Skills';
import Output from '../FormComponents/Output';
import { Container } from "@mui/system";

export const UserContext = createContext(null);

function Form()
{
    const steps = ['Personal Information', 'Education', 'Experience', 'Skills', 'Output'];
    const [activeStep, setActiveStep] = React.useState(0); 
    
    const [userInfo, setUserInfo] = useState({
          Fname: '',
          Lname:'',
          email:'',
          phone:'',
          location:'',
          linkedin:'',
          portfolio:'',
          summary:'',
          education: [{
            title:'',
            institution:'',
            start:'',
            end:'',
            type:''
          }],
          experience: [{
            title:'',
            company:'',
            start:'',
            end:'',
            activities:''
          }],
          skill: [''],
      });

    function getStepContent(step) {
        switch (step) {
          case 0:
            return <Personal />;
          case 1:
            return <Education />;
          case 2:
            return <Experience />;
          case 3:
            return <Skills />;
          case 4:
            return <Output />;
          default:
            throw new Error('Unknown step');
        }
      }

      const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };

    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    IMD Resumator
                </Typography>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/Form">Templates</Button>
                <Button color="inherit" href="/Instruction">How To</Button>
                </Toolbar>
            </AppBar>
        </Box>
        
        <UserContext.Provider value={{userInfo, setUserInfo}}> 
        <Container component="main" maxWidth="md" sx={{mb:4}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Resume Information
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>          
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Download PDF' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
            </Paper>
            </Container>
        </UserContext.Provider>
        </div>
    )
}

export default Form;