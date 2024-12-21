import { TextField, createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css';

const Header = ({word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
          type: lightMode ? "light" : 'dark',
        },
    });

  //   const handleChange = (e) => {
  //   setWord(e.target.value); // Correctly updates the word state
  // };

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Dictionary App" }</span>
            <div className='inputs'>
                <ThemeProvider  theme={darkTheme}>
                <TextField className="search" value={word} onChange={(e)=>setWord(e.target.value)} label="Search a Word" />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
