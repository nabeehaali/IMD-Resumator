import { Button} from '@mui/material';
import './Home.css'
import HelpButton from '../PageComponents/Help'
import NavBar from '../PageComponents/Navbar';

function getStarted()
{
    return(
        <div>
        <NavBar/>
        <div class="welcome">
        <h1>Welcome to IMD Resumator!</h1>
        <p>This website is the perfect tool for IMD students to build a custom made resume for when they apply to any jobs in tech!</p>
        <br></br>
        <h6>Please note that this website is meant to be used to build <strong>1 resume only</strong>! You can save your resume by downloading it as a PDF once it has been built.</h6>
        <br></br>
        <Button variant="contained" href="/Form">Create Your Resume</Button>
        </div>
        <div class="welcome-img">
            <img class="img_home" src="/home.png" alt="Resume Sample"/>
        </div>
        <HelpButton/>
        </div>
    )
}

export default getStarted;