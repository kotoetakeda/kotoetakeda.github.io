import React, { useState, useEffect } from "react";
import { useTheme } from "@chakra-ui/react"; 
import { Box, Flex, Input, FormControl, Textarea, useToast, Text, Button } from "@chakra-ui/react";
// import { H1, Body, CustomButton } from "./Custom";
import Header from './components/NavBar';
import Footer from './components/Footer';
import emailjs from "emailjs-com";

const Contact = () => {

  const theme = useTheme();
  const colors = theme.colors;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sduk1tm', // Service ID
      'template_qrcwnlo', // Template ID
      e.target,
      'JVvkuGQUcVqr53bpI' // Public Key
    )
    .then((result) => {
      console.log(result.text);
      toast({
        title: "Message Sent.",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, (error) => {
      console.log(error.text);
      toast({
        title: "Error.",
        description: "There was an error sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true
      });
    });
  };

  return (
    <>
    <Header />
    <Box p={"3rem 5rem"} w={'100%'} bg={colors.white}>
        <Flex bg={colors.white} w={'100%'} height={'fit-content'} py={"5rem"} flexDirection={'column'} justify={'center'} align={'center'} textAlign={'center'}>
        <Text pb={'1rem'} fontSize={'5xl'} fontWeight={'300'}>Let's Connect</Text>
          <Text fontSize={'xl'}>I would love to hear from you! Whether you want to give feedback to my work or learn more about it,</Text>
          <Text pb={"3rem"} fontSize={'xl'}>please reach out and I will get back to you as soon as I can. </Text>
          <Box width={'70%'}>
            <form onSubmit={sendEmail} width={'100%'}>
              <Flex width={'100%'} justify={'space-between'} align={'center'} gap={'6'}>
                <FormControl id="name" isRequired>
                <Input 
                  placeholder={'Full Name*'} 
                  borderRadius={'0'}
                  type="text" name="name"
                  value={formData.name}
                  size={"lg"} m={'3'} 
                  borderColor={colors.body} focusBorderColor={colors.cyan} 
                  onChange={handleChange} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <Input
                    placeholder={'Email*'}
                    borderRadius={'0'}
                    type="email" name="email"
                    size={"lg"} m={'3'}
                    value={formData.email}
                    borderColor={colors.body} focusBorderColor={colors.cyan} 
                    onChange={handleChange} />
                </FormControl>
              </Flex>
              <Flex width={'100%'} justify={'center'}>
                <FormControl id="message">
                  <Textarea 
                    placeholder={'Message'} name="message"
                    borderRadius={'0'}
                    value={formData.message}
                    size={"lg"} m={'3'} h={'30vh'} 
                    borderColor={colors.body} focusBorderColor={colors.cyan}
                    onChange={handleChange} />
                </FormControl>
              </Flex>
              <Button label={'Send'} bg={colors.body} type={'submit'} color={colors.white}>Send</Button>
            </form>
          </Box>
        </Flex>
    </Box>
    <Footer />
    </>
  );
}

export default Contact;
