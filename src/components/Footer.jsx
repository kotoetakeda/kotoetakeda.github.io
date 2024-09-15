import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Flex, Text, Icon, Box, Divider } from "@chakra-ui/react";
import { MdCopyright, MdEmail } from "react-icons/md";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = () => {
 
    const theme = useTheme();
    const { colors } = theme;

  return (
    <>
    <Box w={'100%'} p={'0rem 5rem 0.5rem 5rem'} bg={colors.white}>
        
        {/* Divider at top of footer */}
        <Divider borderColor={colors.body} border={"0.5px solid"} />

        {/* Main footer container */}
        <Flex pt={'0.5rem'} w={'100%'} align={'baseline'}>

            <Flex justify={'left'} w={'70%'} align={'center'} gap={10}>  
                {/* Logo */}
                <Text fontSize={'20px'} pr={'2rem'}>KOTOE TAKEDA</Text> 

                {/* Link to Email */}
                <a href="mailto:ktakeda3@gatech.edu" target="_blank" rel={'noreferrer'} _hover={{'color': colors.body_inactive}}>
                    <Flex gap="0.5rem" align={'center'}>
                        <Icon as={MdEmail} boxSize={5}/>
                        <Text fontSize={'16px'}>ktakeda3@gatech.edu</Text>
                    </Flex>
                </a>

                {/* Link to Linkedin */}
                <a href="https://www.linkedin.com/in/kotoetakeda/" target="_blank" rel={'noreferrer'} _hover={{'color': colors.body_inactive}}>
                    <Flex gap="0.5rem" align={'center'}>
                        <Icon as={IoLogoLinkedin} boxSize={5}/>
                        <Text fontSize={'16px'}>kotoetakeda</Text>
                    </Flex>
                </a>

                {/* Link to GitHub */}
                <a href="https://github.com/kotoetakeda" target="_blank" rel={'noreferrer'} _hover={{'color': colors.body_inactive}}>
                    <Flex gap="0.5rem" align={'center'}>
                        <Icon as={IoLogoGithub} boxSize={5}/>
                        <Text fontSize={'16px'}>kotoetakeda</Text>
                    </Flex>
                </a>
            </Flex>

            {/* Copyright message on the right */}
            <Flex w={'50%'} justify={'end'} gap={1} align={'center'}>
                <Icon as={MdCopyright} boxSize={4}/>
                <Text fontSize={"16px"}>Kotoe Takeda 2024. All Right Reserved.</Text>
            </Flex>
        </Flex>
    </Box>
    </>
  );
}

export default Footer;