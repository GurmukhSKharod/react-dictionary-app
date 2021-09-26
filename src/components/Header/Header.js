import { TextField, createTheme, ThemeProvider, MenuItem  } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../data/category';

const Header = ({setCategory, category, word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
          type: lightMode ? "light" : 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Dictionary App" }</span>
            <div className='inputs'>
                <ThemeProvider  theme={darkTheme}>
                <TextField className="search" value={word} onChange={(e)=>setWord(e.target.value)} label="Search a Word" />
                    <TextField
                        select
                        label="Language"
                        className="select"
                        value={category}
                        onChange={(e)=>handleChange(e.target.value)}
                        >
                            {
                                categories.map((option) => (
                                    <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                                ))
                            }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
