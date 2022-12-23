import React, {useRef,useContext} from "react";
import { UserContext} from "../SubPages/Form";
import './Output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
//import {useReactToPrint} from 'react-to-print'

//Nabeeha Ali: This outputs all of the information that was stored in the userInfo useState variable, which is updated based on the user's imputs throughout all steps of the resume building form. Styling of this information was completed by another member of the group.
function Output()
{
    const { userInfo } = useContext(UserContext);
    
    const componentRef = useRef();
    
    
 /* const handlePrint = useReactToPrint({
    content:()=> componentRef.current,
    documentTitle: 'IMD - Resume',
    onAfterPrint: ()=> alert('Print success')
});*/


    return(      
                <div ref={componentRef}  className="resume" >
            <div className="resume_left">
                <div className="resume_profile">
                    <img src="avatar.png" alt="profile_pic" />
                </div>
                <div className="resume_content">
                    <div className="resume_item resume_personalinfo">
                        <div className="title"> 
                            <h1 className="bold">{userInfo.Fname} {userInfo.Lname}</h1>
                            <h2 className="semi-bold">IMD Grad</h2>
                            </div>
                            <ul>
                            <h3 className="subheading">Personal Infromation</h3>
                                    <p className="data"> <FontAwesomeIcon icon={faEnvelope}  /> {userInfo.email}</p>
                                    <p className="data"> <FontAwesomeIcon icon={faPhone}  /> {userInfo.phone}</p>
                                    <p className="data"> <FontAwesomeIcon icon={faLocationDot}  /> {userInfo.location}</p>
                            </ul>    
                    </div>
                    <div className="resume_item resume_skills">
                        <ul>
                        <h3 className="subheading">Skills</h3>
                        <h4 className="resume_skills">{userInfo.comSkills}</h4>
                        <h4 className="resume_skills">{userInfo.designSkills}</h4>
                         <h4 className="resume_skills">{userInfo.techSkills}</h4>
                         </ul>
                    </div>
                    <div className="resume_item resume_links">
                        <ul>
                        <h3 className="subheading">Links</h3>
                        <h4 className="semi-bold">Linkedin</h4>
                        <h6 className="links"> {userInfo.linkedin}</h6>
                        <br></br>
                        <h4 className="semi-bold">Portfolio </h4>
                        <h6 className="links">{userInfo.portfolio}</h6>
                         </ul>
                    </div>               
                 </div>
            </div>

            <div className="resume_right">
                <h2 className="subheading">Summary</h2>
                <hr></hr>
                <ul>
                <h4 className="data">{userInfo.summary}</h4>
                    </ul>
                    
                <h2 className="subheading">Education</h2>
                <hr></hr>
                <ul>
            <h4 className="semi-bold">{userInfo.education.title}</h4>
            <h4 className="data">{userInfo.education.institution}   |   {userInfo.education.start} - {userInfo.education.end}</h4>
            <h4 className="data">{userInfo.education.type}</h4>
            </ul>
            <br></br>

           
            <h2 className="subheading">Experience</h2>
            <hr></hr>
            <ul>
            <h4 className="semi-bold">{userInfo.experience.title}</h4>
            <h4 className="data">{userInfo.experience.company}  |  {userInfo.experience.start} - {userInfo.experience.end}</h4>
            <h4 className="data">{userInfo.experience.activities}</h4>
            </ul>
            <br></br>
            
        
            </div>
        </div>
    )
}

export default Output;
