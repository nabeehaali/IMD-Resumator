import { Button, Toolbar, Box, Typography, AppBar, Stack } from '@mui/material';

export default function NavBar() {
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
                <Button style={{color: "black"}} color="inherit" href="/Form">Build Resume</Button>
                <Button style={{color: "black"}} color="inherit" href="/Instruction">How To</Button>
                </Stack>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}