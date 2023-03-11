import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

function SignUp(){
    const navigation = useNavigate()
    return(
        <>
        <Box sx={{
            height:'600px',
            marginLeft:'30%',
            width:'40%',
            borderRadius:"20px",
            border:'1px solid black',
            }}>
            <Typography sx={{
                textAlign:"center",
                fontWeight:"bold",
                fontFamily:"cursive"
            }} variant="h2"> Sign Up </Typography>
                  <TextField className="Username"
        id="input-with-icon-textfield"
        label="First Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField className="Username"
        id="input-with-icon-textfield"
        label="Last Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     <TextField className="Username"
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     <TextField className="Username"
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     <TextField className="Username"
        id="input-with-icon-textfield"
        label="Confirm Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box>
      <Button
      sx={{
        marginTop:'8%',
        width:'22%',
        fontSize:"19px",
        fontWeight:'bold',
        marginLeft: "20%",
      }}
      variant="contained" onClick={() => navigation('/login') } size="large" >Sign Up</Button>
      </Box>
        </Box>
        </>
    )
}
export default SignUp;