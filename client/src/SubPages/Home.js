import { Button, Toolbar, Box, Typography, AppBar } from '@mui/material';

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
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/Form">Templates</Button>
                <Button color="inherit" href="/Instruction">How To</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <h1>Welcome to IMD Resumator!</h1>
        </div>
    )
}

export default getStarted;