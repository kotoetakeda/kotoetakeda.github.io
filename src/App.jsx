import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./index";
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
