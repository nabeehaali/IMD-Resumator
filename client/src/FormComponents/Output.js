import React, {useContext} from "react";
import { UserContext } from "../SubPages/Form";

function Output()
{
    const { userInfo } = useContext(UserContext);

    return(
        <div>
            <h2>Personal Information</h2>
            <h4>{userInfo.Fname}</h4>
            <h4>{userInfo.Lname}</h4>
            <h4>{userInfo.email}</h4>
            <h4>{userInfo.phone}</h4>
            <h4>{userInfo.location}</h4>
            <h4>{userInfo.linkedin}</h4>
            <h4>{userInfo.portfolio}</h4>
            <h4>{userInfo.summary}</h4>
            <br></br>
            <h2>Education</h2>
            <h4>{userInfo.education.title}</h4>
            <h4>{userInfo.education.institution}</h4>
            <h4>{userInfo.education.start}</h4>
            <h4>{userInfo.education.end}</h4>
            <h4>{userInfo.education.type}</h4>
            <br></br>
            <h2>Experience</h2>
            <h4>{userInfo.experience.title}</h4>
            <h4>{userInfo.experience.company}</h4>
            <h4>{userInfo.experience.start}</h4>
            <h4>{userInfo.experience.end}</h4>
            <h4>{userInfo.experience.activities}</h4>
        </div>
    )
}

export default Output;