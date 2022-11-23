import { Button, Toolbar, Box, Typography, AppBar, Stack } from '@mui/material';
import './Home.css'

function getStarted()
{
    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: "white"}}>
                <Toolbar>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                <img class="img_logo" style={{width: "170px"}} src="/logo.png" alt="Logo" ></img>
                </Typography>
                <Stack direction="row" spacing={2}>
                <Button style={{color: "black"}} color="inherit" href="/">Home</Button>
                <Button style={{color: "black"}} color="inherit" href="/Form">Templates</Button>
                <Button style={{color: "black"}} color="inherit" href="/Instruction">How To</Button>
                </Stack>
                </Toolbar>
            </AppBar>
        </Box>
        <div class="welcome">
        <h1>Welcome to IMD Resumator!</h1>
        <p>This website is the perfect tool for IMD students to build a custom made resume for when they apply to any jobs in tech!</p>
        <Button variant="contained" href="/Form">Create Your Resume</Button>
        </div>
        <div class="welcome-img">
            <img class="img_home" src="/home.png" alt="Italian Trulli"/>
        </div>
        </div>
    )
}

export default getStarted;