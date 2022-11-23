import { Button, Toolbar, Box, Typography, AppBar } from '@mui/material';
import './Instruction.css'

function Instruction()
{
    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar>
                <Typography  component="div" sx={{ flexGrow: 1 }}>
                <img class="img_logo" style={{width: "170px"}} src="/logo.png" alt="Logo" ></img>
                </Typography>
                <Button style={{color: "black"}} color="inherit" href="/">Home</Button>
                <Button style={{color: "black"}} color="inherit" href="/Form">Templates</Button>
                <Button style={{color: "black"}} color="inherit" href="/Instruction">How To</Button>
                </Toolbar>
            </AppBar>
        </Box>

        <div class="title">
        <h2>How to use IMD Resumator</h2>
        </div>

        <div class="row">
        <div class="column">
          <img class="img" src="/first.png" alt="Choose Template"></img>
          <span class="caption">1. Choose a template</span>
        </div>
        <div class="column">
          <img class="img" src="/second.png" alt="Fill Details"></img>
          <span class="caption">2. Fill your details</span>
        </div>
        <div class="column">
          <img class="img" src="/third.png" alt="Download"></img>
          <span class="caption">3. Build and download!</span>
        </div>
        </div>

        <div class="center">
        <Button variant="contained" href="/Form">Get Started!</Button>
        </div>

        </div>
    )
}

export default Instruction;