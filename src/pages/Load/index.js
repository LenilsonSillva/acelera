import { Typography, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect } from 'react'
import Logo from '../Components/img/t.png'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import fireAccess from '../Auth/config/fb';
import { useNavigate } from 'react-router-dom';

export default function Load() {

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(fireAccess);
    onAuthStateChanged(auth, (user) => {
      if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
        navigate('/', {replace: true});
        console.log('Logado')
    // ...
      } else {
    // User is signed out
        navigate('/login', {replace: true})
        console.log('Não logado')
    }
  });
  }, [])

  return (
    <Box style={{width: '100vw', height: '100vh', backgroundColor: '#e8eaf6'}}>
        <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress className='MuiLinearProgress-bar' size={250} sx={{color:'#ff5722', position: 'absolute', display: 'flex', alignSelf: 'center'}}/>
            <img src={Logo} style={{ width: 75, height: 'auto', margin: 10}}/>
            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Acelera WorkPlace</Typography>
        </Box>
    </Box>
  )
}
