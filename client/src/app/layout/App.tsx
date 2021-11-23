

import { Container, CssBaseline } from "@mui/material";

import Catalog from "../../features/catalog/catalog";
import Header from "./Header";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useState } from "react";
import { Route } from "react-router";
import Home from "../../features/Home/HomePage";
import About from "../../features/About/AboutPage";
import Contact from "../../features/Contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";

function App() {
const [darkMode,setDarkMode]=useState(false);
const paletteType=darkMode?'dark':'light'
  const theme=createTheme(
{
  palette:{
    mode:paletteType,
    background:{default:paletteType==='light'?'#eaeaea':'#121212'}
  }
}
  );
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
 
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Route path="/" exact component={Home} />
      <Route path="/Catalog" exact component={Catalog} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Catalog/:id" component={ProductDetails} />
   
    </Container>
    </ThemeProvider>
  );
}

export default App;
