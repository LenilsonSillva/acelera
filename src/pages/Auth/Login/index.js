import { Container, Box, TextField, Typography, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react'
import Logo from '../../Components/img/t.png'
import { useNavigate } from 'react-router-dom';
import 'firebase/auth'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fireAccess from '../config/fb';

export default function Login() {

  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verify = async() => {
    const auth = getAuth(fireAccess);
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      localStorage.setItem('user', userCredential.user)
      return navigate('/', {replace: true})
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  return (
      <Box sx={{ minHeight: '100vh', bgcolor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box id='box_login' sx={{ display: 'flex', 
                flexDirection: 'column', 
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.secondary, 
                alignItems: 'center', 
                justifyContent: 'space-evenly', 
                padding: 3,
                borderRadius: 7
                }}>
          <img src={Logo} style={{  width: 80, height: 'auto', marginBottom: 30}}/>
          <TextField type='email' value={email} onChange={({ target }) => setEmail(target.value)} label="Email" variant="filled" size='medium' sx={{  mb: 3, width: '80vw', maxWidth: '400px' }}/>
          <TextField label="Senha" type="password" value={password} onChange={({ target }) => setPassword(target.value)} variant="filled" sx={{  mb: 5, width: '80vw', maxWidth: '400px' }}/>
          <LoadingButton loading={false} onClick={()=>{verify()}} loadingIndicator="Loading…" variant="outlined" color='inherit' sx={{ mb: 2.5 }}>
            Entrar
          </LoadingButton>
          <Typography sx={{fontSize: 13}} >Ainda não é um franqueado? <a style={{ color: theme.palette.text.button, fontWeight: 'bold' }} className='btn_pointer' onClick={()=>{navigate('/signup', {replace: true})}}>Junte-se!</a></Typography>
        </Box>
      </Box>
  )
}
