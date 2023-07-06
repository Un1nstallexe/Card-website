import "./App.css";
import SvgMap from "./components/SvgMap/SvgMap";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RulesModal from "./components/rulesModal/RulesModal";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => { 

    return (

        <div className="minigeo">
            <ThemeProvider theme={darkTheme}> 
                
                <SvgMap/>
                <RulesModal/>
            </ThemeProvider>
        </div>
    );
}

export default App;
