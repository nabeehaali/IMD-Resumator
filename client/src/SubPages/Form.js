import React, {useState, createContext} from "react"; 
import {Box, Button, Paper, Typography, Stepper, Step, StepLabel} from '@mui/material';
import Personal from '../FormComponents/PersonalInfo';
import Education from '../FormComponents/Education';
import Experience from '../FormComponents/Experience';
import Skills from '../FormComponents/Skills';
import Output from '../FormComponents/Output';
import { Container } from "@mui/system";
import jsPDF from "jspdf";
import img1 from '../Assets/avatar.png';
import HelpButton from '../PageComponents/Help'
import NavBar from '../PageComponents/Navbar';


export const UserContext = createContext(null);
export const NextContext = createContext(null);
export const NextContext2 = createContext(null);
export const NextContext3 = createContext(null);
export const NextContext4 = createContext(null);

//Nabeeha Ali: This is the main form page that handles which pae of the multistep form gets rendered depending on the number of times the 'next' button has been clicked. This is also the main storage for all form inputs regarding the resume, which is accessed using React's useContext component. At the last page of the multistep form, the user can download their resume as a PDF and the customization of the PDF file is handled here.
function Form()
{
  

    const steps = ['Personal Information', 'Education', 'Experience', 'Skills', 'Output'];
    const [activeStep, setActiveStep] = React.useState(0); 

    const [showNext, setShowNext] = React.useState(true);
    const [showNext2, setShowNext2] = React.useState(true);
    const [showNext3, setShowNext3] = React.useState(true);
    const [showNext4, setShowNext4] = React.useState(true);

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
          comSkills: '',
          designSkills:'',
          techSkills: ''
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
        setShowNext(true);
        setShowNext2(true);
        setShowNext3(true);
        setShowNext4(true);
      };


    /*  const pdfGenerate=()=>{

      }*/
     const pdfGenerate= () =>{
        var doc=new jsPDF('portrait','px','a4','false');
        doc.addImage(img1,'PNG', 20,20,100,100)
       doc.text(userInfo.Fname, 50,200)
       doc.text(userInfo.Lname,50,220)
       doc.setTextColor('#0791ed')
       doc.text('PERSONAL INFORMATION',20,250)
       doc.setTextColor('#000000')
       doc.text(userInfo.email,20,270)
       doc.text(userInfo.phone,20,290)
       doc.text(userInfo.location,20,310)
       doc.setTextColor('#0791ed')
       doc.text('SKILLS',20,340)
       doc.setTextColor('#000000')
       doc.text(userInfo.comSkills,20,360)
       doc.text(userInfo.techSkills,20,380)
       doc.text(userInfo.designSkills,20,400)
       doc.setTextColor('#0791ed')
       doc.text('LINKS',20,440)
       doc.setTextColor('#000000')
       doc.text(userInfo.linkedin,20,460)
       doc.text(userInfo.portfolio,20,480)
       doc.setTextColor('#0791ed')
       doc.text('SUMAARY',200,100)
       doc.setTextColor('#000000')
       doc.text(userInfo.summary, 200,120)
       doc.setTextColor('#0791ed')
       doc.text('EDUCATION',200,150)
       doc.setTextColor('#000000')
       doc.text(userInfo.education.title,200,170)
       doc.text(userInfo.education.institution,200,190)
       doc.text(userInfo.education.start,200,210)
       doc.text(userInfo.education.end,200,230)
       doc.text(userInfo.education.type,200,250)
       doc.setTextColor('#0791ed')
       doc.text('EXPERIENCE',200,280)
       doc.setTextColor('#000000')
       doc.text(userInfo.experience.title,200,300)
       doc.text(userInfo.experience.company,200,320)
       doc.text(userInfo.experience.start,200,340)
       doc.text(userInfo.experience.end,200,360)
       doc.text(userInfo.experience.activities,200,380)
      doc.save()
      }

      
    return(
        <div>
        <NavBar/>
        
        <UserContext.Provider value={{userInfo, setUserInfo}}> 
        <NextContext.Provider value={{showNext, setShowNext}}> 
        <NextContext2.Provider value={{showNext2, setShowNext2}}> 
        <NextContext3.Provider value={{showNext3, setShowNext3}}> 
        <NextContext4.Provider value={{showNext4, setShowNext4}}> 
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

                {activeStep === 0 && (
                  <Button
                  disabled = {showNext}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}>
                  Next
                </Button>
                )}

                {activeStep === 1 && (
                  <Button
                  disabled = {showNext2}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}>
                  Next
                </Button>
                )}

                 {activeStep === 2 && (
                  <Button
                  disabled = {showNext3}
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}>
                  Next
                </Button>
                )}

                {activeStep === 3 && (
                  <Button
                  disabled = {showNext4}
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
            </NextContext4.Provider>
            </NextContext3.Provider>
            </NextContext2.Provider>
            </NextContext.Provider>
        </UserContext.Provider>
        <HelpButton/>
        </div>
    )
}

export default Form;