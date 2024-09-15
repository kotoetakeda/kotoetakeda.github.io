import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react"; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PorfolioPic from './images/portfolio_pic.JPG';


const Home = () => {

  // Access custom colors from the theme; custom colors can be found in index.js
  const theme = useTheme();
  const { colors } = theme;

  return (
    <>
        <NavBar />
        <Box p={"1rem 6rem"}>
            <Flex justify={'space-evenly'} align={'center'} width={'100%'} py={'5rem'}>
                {/* Introduction */}
                <Flex justify={'center'} align={'center'} flexDirection={'column'} >
                    <Text fontSize={'6xl'} fontWeight={'300'}>Good design is obvious.</Text>
                    <Text fontSize={'6xl'} fontWeight={'300'}>Great design is transparent.</Text>
                </Flex>
                <Flex justify={'center'} align={'center'}>
                <Image
                    width={'32vw'}
                    objectFit={'cover'}
                    src={PorfolioPic}
                    alt={'My portfolio picture'}
                />
                </Flex>
            </Flex>

            {/* Work Portfolio */}
            <Flex justify={'center'} align={'left'} flexDirection={'column'} width={'100%'} py={'5rem'}>
                <Text fontSize={'5xl'} fontWeight={'300'}>Recent Work</Text>
                <Flex justify={'space-between'} align={'left'} width={'100%'} py={'2rem'}>
                    <Box bg={colors.body} color={'white'} boxSize={'23rem'}>Google Qualpat</Box>
                    <Box bg={colors.body} color={'white'} boxSize={'23rem'}>SAQ Assistant</Box>
                    <Box bg={colors.body} color={'white'} boxSize={'23rem'}>Marta</Box>
                </Flex>
            </Flex>
        </Box>
        <Footer />
    </>
  );
}

export default Home;
