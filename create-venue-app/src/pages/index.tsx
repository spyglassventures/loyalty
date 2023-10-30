import {
    Link as ChakraLink,
    Text,
    Box,
    Heading,
    Code,
    List,
    ListIcon,
    ListItem,
  } from '@chakra-ui/react';
  import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
  
  import { Hero } from '../components/Hero';
  import { Container } from '../components/Container';
  import { Main } from '../components/Main';
  import { DarkModeSwitch } from '../components/DarkModeSwitch';
  import { CTA } from '../components/CTA';
  import { Footer } from '../components/Footer';
  import Navbar from "../components/Navbar";
  
  const Index = () => {
      return (
          <Container>
              <Navbar />
              
              <Main>
                  <Hero title="Welcome to the Signa Seal App!" />
                  <Text mt={1}>
                      This is a mobile-compatible landing page with navigation.
                  </Text>
                  
                  <List spacing={3} my={0}>
                      <ListItem>
                          <ListIcon as={CheckCircleIcon} color="green.500"/>
                          First list item
                      </ListItem>
                      <ListItem>
                          <ListIcon as={CheckCircleIcon} color="green.500"/>
                          Second list item
                      </ListItem>
                  </List>
                  
                  <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
                      <Box display="flex" alignItems="center" flexDirection="row">
                          <Text>Chakra UI</Text>
                          <LinkIcon />
                      </Box>
                  </ChakraLink>
                  <CTA />
                  
                  <DarkModeSwitch />
                  
                  
                  <Footer>
                      <Text>Here's the footer content.</Text>
                  </Footer>
                  
                  
              </Main>
          </Container>
      );
  };
  
  export default Index;
  