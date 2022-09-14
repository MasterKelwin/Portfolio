import { Wrapper } from './style';
import GlobalStyle from 'Global/Global';
import dark from '../Global/Theme/Dark';
import light from '../Global/Theme/Light';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';



export default function App() {
    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === 'dark' ? dark : light)
    }

    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Wrapper>Hello World</Wrapper>
        </ThemeProvider>
    )
}