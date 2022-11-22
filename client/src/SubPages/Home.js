import { Button, Toolbar, Box, Typography, AppBar, Stack } from '@mui/material';
import './Home.css'

function getStarted()
{
    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    IMD Resumator
                </Typography>
                <Stack direction="row" spacing={2}>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/Form">Templates</Button>
                <Button color="inherit" href="/Instruction">How To</Button>
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
            <img src="https://www.w3schools.com/images/picture.jpg" alt="Italian Trulli"/>
        </div>
        </div>
    )
}

export default getStarted;