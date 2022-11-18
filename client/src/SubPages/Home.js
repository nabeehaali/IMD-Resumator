import { Button } from '@mui/material';

function getStarted()
{
    return(
        <div>
            <h1>IMD RESUMATOR</h1>
            <Button href="/Form">Start</Button>
            <p>Not sure what this is? Learn more <a href="/Instruction">here</a></p>
        </div>
    )
}

export default getStarted;