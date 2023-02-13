import { ThemeProvider } from '@mui/material'
import React from 'react';
import theme from './theme/theme'
import './App.css';
import { MuiTypography } from './components/atoms/Typography';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <h1>Welcome!</h1>
    <MuiTypography variant='heading4'>Namasthe</MuiTypography>
    </div>
    </ThemeProvider>
  )
}

export default App

