import { Button} from '@mui/material';
import './Instruction.css'
import HelpButton from '../PageComponents/Help'
import NavBar from '../PageComponents/Navbar';

function Instruction()
{
    return(
        <div>
        <NavBar/>
        <div class="title">
        <h2>How to use IMD Resumator</h2>
        </div>

        <div class="row">
        <div class="column">
          <img class="img" src="/second.png" alt="Fill Details"></img>
          <span class="caption">1. Fill your details</span>
        </div>
        <div class="column">
          <img class="img" src="/third.png" alt="Download"></img>
          <span class="caption">2. Build and download!</span>
        </div>
        </div>

        <div class="center">
        <Button variant="contained" href="/Form">Get Started!</Button>
        </div>
        <HelpButton/>
        </div>
    )
}

export default Instruction;