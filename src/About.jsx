import React from "react";
import { Box, Text, WrapItem, Wrap, Image, Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react"; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import PorfolioPic from './images/portfolio_pic.JPG';
import Shooting from './images/shooting.jpg';
import Archery from './images/archery.jpg';
import Hiking from './images/hiking.jpg';
import Holiday from './images/holiday.jpeg';
import WoodCarving from './images/woodCarving.jpeg';
import Crocheting from './images/crocheting.jpeg';
import Cooking from './images/cooking.jpeg';



const Contact = () => {

  const theme = useTheme();
  const { colors } = theme;

  return (
    <Box w={'100%'} bg={colors.white}>
        <NavBar />
        <Box p={"1rem 5rem"}>
            <Text fontSize={'5xl'} fontWeight={'300'}>Personal Life</Text>
            <Flex justify={'space-between'} align={'center'} >
              <Wrap spacing={10}>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Shooting} alt={'Shooting'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Archery} alt={'Archery'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Hiking} alt={'Hiking'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Holiday} alt={'Taking Every Holiday Seriously'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Crocheting} alt={'Crocheting'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={WoodCarving} alt={'Wood Carving'}/>
                </WrapItem>
                <WrapItem>
                  <Image width={'15vw'} height={'15vw'} objectFit={'cover'} borderRadius={'50%'} src={Cooking} alt={'Cooking'}/>
                </WrapItem>
                {/* Ice skating, skiing, mongolian dancing, salsa/bachata, knitting, bouldering, taido, swimming, violin, cat lady, skateboarding,  */}
              </Wrap>
            </Flex>
        </Box>
        <Footer />
    </Box>
  );
}

export default Contact;
