import { Box } from '@mui/material';
import React, { Suspense } from 'react'
import Load from '../Load'
import { Route, Routes as Rout} from 'react-router-dom';
import MiniDrawer from '../Components/Drawer';
import Home from './Home';

export default function WorkArea({data}) {
  return (
    <Suspense fallback={<Load/>}>
      <Box sx={{ width: '100vw', height: '100vh', pt: { md: 10, xs: 9}, paddingInline: { md: 2, xs: 0.5} }}>
          <MiniDrawer data={data}/>
          <Box sx={{ marginLeft: { md : '70px', xs : 0 } }}>
            <Rout>
              <Route exact path='/' element={<Home/>} index/>
              {
                // remover 'acelera' fora do git
              }
            </Rout>
          </Box>
      </Box>
    </Suspense>
  )
}
