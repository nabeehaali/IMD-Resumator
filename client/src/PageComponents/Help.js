import React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import { useForm } from "react-hook-form";

//Nabeeha Ali: This is a button component that opens up a form using a modal. The user inputs their contact information, which gets stored in the backend database.json file upon submitting. Form validation is implemented to for smoother user experience. 
export default function HelpForm() {
    const {
        handleSubmit
      } = useForm();

  const [open, setOpen] = React.useState(false);

  const[name,namechange]=React.useState("");
  const[email,emailchange]=React.useState("");
  const[phone,phonechange]=React.useState("");

  const[nameError,namechangeError]=React.useState(false);
  const[emailError,emailchangeError]=React.useState(false);
  const[phoneError,phonechangeError]=React.useState(false);

  const onSubmit=(e)=>{
    e.preventDefault();
    const empdata={name,email,phone};
    namechangeError(false);
    emailchangeError(false);
    phonechangeError(false);
    
    if(name === '')
    {
        namechangeError(true);
    }
    if(email === '')
    {
        emailchangeError(true);
    }
    if(phone === '')
    {
        phonechangeError(true);
    }

    if(name && email && phone)
    {
        fetch(" http://localhost:3001/contact",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
          }).then((res)=>{
            alert('Saved successfully.');
            window.location.reload();
          }).catch((err)=>{
            console.log(err.message)
          })
    }
    

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<MessageIcon />} onClick={handleClickOpen} style={{position: "fixed", bottom:"5%", right: "3%"}}>
        Need Help?
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">We are here to help!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Looking for advice on how to build a resume? Talk to one of our specialists by inputting your information below.
          </DialogContentText><br></br>
          <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant='standard'
            required
            value={name} 
            onChange={e=>namechange(e.target.value)}
            error={nameError}
          />
          <small>Format: John Smith</small>
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant='standard'
            required
            value={email} 
            onChange={e=>emailchange(e.target.value)}
            error={emailError}
          />
          <small>Format: john.smith@gmail.com</small>
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant='standard'
            required
            value={phone} 
            onChange={e=>phonechange(e.target.value)}
            error={phoneError}
          />
          <small>Format: 123-456-7890</small>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={onSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}