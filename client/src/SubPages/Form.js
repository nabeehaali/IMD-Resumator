import React, {useState, createContext} from "react"; 
import {Box, Button, Paper, Typography, Stepper, Step, StepLabel} from '@mui/material';
import Personal from '../FormComponents/PersonalInfo';
import Education from '../FormComponents/Education';
import Experience from '../FormComponents/Experience';
import Skills from '../FormComponents/Skills';
import Output from '../FormComponents/Output';
import { Container } from "@mui/system";
import jsPDF from "jspdf";
import img1 from '../Assets/home.png';
import HelpButton from '../PageComponents/Help'
import NavBar from '../PageComponents/Navbar';

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
          skills: [{
            communication:'',
            design:'',
            technical:''
          }],
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

      const pdfGenerate= () =>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.addImage(img1,'PNG', 65,20,500,400)
        doc.addPage()
        doc.text(120,410,'name')
        doc.save()
      }

      
    return(
        <div>
        <NavBar/>
        
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

                {activeStep !== 4 && (
                  <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}>
                  Next
                </Button>
                )}

                {activeStep === 4 && (
                <Button 
                variant="contained" 
                onClick={pdfGenerate}
                sx={{ mt: 3, ml: 1 }}>
                    Download PDF
                  </Button>
                )}

              </Box>
            </React.Fragment>
            </Paper>
            </Container>
        </UserContext.Provider>
        <HelpButton/>
        </div>
    )
}

export default Form;