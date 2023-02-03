//Pages imports
import React, {Suspense, useState, useEffect} from 'react';
//Dark Mode
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, deepOrange, blueGrey, grey, teal, indigo } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';
import Load from './pages/Load';

const Pages = React.lazy(() => import('./pages'));

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); //Padrão dark em vez de light
  const [data, setData] = useState(prefersDarkMode);

  //Const que recebe a opção de mudança de tema.
  const childToParent = (value) => {
    setData(value);
  }

  useEffect(() => {
    setData(prefersDarkMode)
  }, [prefersDarkMode])
  

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: data ? 'dark' : 'light',
          ... data
          ? {
            // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[500],
          background: {
            default: blueGrey[800],
            paper: blueGrey[900],
            secondary: blueGrey[800],
            th: blueGrey[700]
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
            button: deepOrange[300]
          },
          }
          : {
            // palette values for light mode
          primary: indigo,
          divider: indigo[200],
          background: {
            default: '#fff',
            paper: indigo[50],
            secondary: indigo[100],
            th: indigo[100]
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
            button: deepOrange[700]
          },
          }
        },
      }),
    [data, prefersDarkMode],
  );

  return (
    <Suspense fallback={<Load/>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages data={childToParent} theme={prefersDarkMode}/>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
