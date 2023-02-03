import { Typography, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'
import Logo from '../Components/img/t.png'

export default function Load() {

  return (
    <Box style={{width: '100vw', height: '100vh', backgroundColor: '#e8eaf6'}}>
        <Box style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress size={250} sx={{color:'#ff5722', position: 'absolute', display: 'flex', alignSelf: 'center'}}/>
            <img src={Logo} style={{ width: 75, height: 'auto', margin: 10}}/>
            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Acelera WorkPlace</Typography>
        </Box>
    </Box>
  )
}
