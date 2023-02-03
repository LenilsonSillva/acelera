import React from 'react';
import { Route, Routes as Rout} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import WorkArea from './WorkArea';

export default function Pages({data}) {

  return (
    <div>
        <Rout>
            <Route exact path='*' element={<WorkArea data={data}/>} index/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
        </Rout>
    </div>
  )
}
