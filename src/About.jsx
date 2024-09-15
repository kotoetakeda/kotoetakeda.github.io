import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react"; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';

/**
 * Contact Page
 */
const Contact = () => {

  // Access custom colors from the theme; custom colors can be found in index.js
  const theme = useTheme();
  const { colors } = theme;

  return (
    <Box w={'100%'} bg={colors.white}>
        <NavBar />
        <Box p={"1rem 5rem"}>
            <Text fontSize={'lg'} > History Page Content </Text>
        </Box>
        <Footer />
    </Box>
  );
}

export default Contact;
