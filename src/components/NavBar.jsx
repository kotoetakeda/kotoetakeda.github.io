import React from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Flex, Text, Box, HStack, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

/**
 * NavBar Component
 * Contains all of the code for the navigation bar at the top of the page 
 *      including the logo, links to "Home" and "History" pages, and a divider.
 */
const NavBar = () => {

    // Access the custom theme from Chakra UI
    const theme = useTheme();
    const { colors } = theme;

    return (
        <Box w={'100%'} p={"1rem 5rem"}>
            <Flex justify={'space-between'} align={'baseline'}>
                
                {/* Logo section on the left */}
                <Flex>
                    <NavLink to={"/"} textDecoration="none">
                        <Text 
                            color={colors.body} 
                            fontSize={'3xl'} 
                            _hover={{'color': colors.body_inactive}}
                        >
                            KOTOE TAKEDA
                        </Text>
                    </NavLink>
                </Flex>

                {/* Navigation links section on the right */}
                <Flex align={'center'} justify={'end'}>
                    <HStack spacing={'10'}>

                        {/* Link to Home page */}
                        <NavLink to={"/"} textDecoration="none">
                            <Text 
                                color={colors.body} 
                                fontSize={'2xl'}
                                _hover={{'color': colors.body_inactive}}
                            >
                                Home
                            </Text>
                        </NavLink>

                        {/* Link to About page */}
                        <NavLink to={"/about"} textDecoration="none">
                            <Text 
                                color={colors.body} 
                                fontSize={'2xl'}
                                _hover={{'color': colors.body_inactive}}
                            >
                                About
                            </Text>
                        </NavLink>

                        {/* Link to Contact page */}
                        <NavLink to={"/contact"} textDecoration="none">
                            <Text 
                                color={colors.body} 
                                fontSize={'2xl'}
                                _hover={{'color': colors.body_inactive}}
                            >
                                Contact
                            </Text>
                        </NavLink>

                    </HStack>
                </Flex>
                
            </Flex>
            
            <Divider borderColor={colors.body} border={"0.5px solid"} />
        </Box>
    );
};

export default NavBar;
