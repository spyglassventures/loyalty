import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// 1. import `ChakraProvider` component

import { ChakraProvider, extendTheme, Flex, Button, Box, FormControl, FormLabel, List, ListItem, Modal,  ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, useDisclosure } from '@chakra-ui/react';

import Image from "next/image";
import { NextPage } from "next";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { CredentialType } from '@worldcoin/idkit'

// Worldcoin
import { IDKitWidget } from '@worldcoin/idkit'

let credentialTypes = process.env.NODE_ENV === 'production' ? [] : ['orb', 'phone'];


const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white", // You might want to set the default text color to white or another light color for readability
      }
    }
  }
});

const Home: NextPage = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const router = useRouter();

  // for overalay
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000); // Generating a random id for demonstration. You can replace this with any logic.
    router.push(`/restaurant?id=${id}&name=${restaurantName}&timestamp=${timestamp}`);
  };

  const onSuccess = () => {
    // window.location.href = "http://localhost:3000/restaurant?id=401284&name=Pooooetro&timestamp=2023-08-27T22:45";
    window.location.href = "https://loyalty-nu.vercel.app/restaurant?id=401284&name=Pooooetro&timestamp=2023-08-27T22:45%22"
};

  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" >
    <main className={styles.main}>

      <div className={styles.button}>
        {/* }<ConnectWallet/> */}
      </div>

      
      
      <div >
      <Box p={50} shadow="md" borderRadius="md">
        <Flex justifyContent="center" alignItems="center" height="100%">
            <Image 
              src="/images/loyalty_logo.png"
              alt="Placeholder preview of templates"
              width={300}
              height={200}
            />
        </Flex>
      </Box>
      </div>

      <div >
      <Box p={50} shadow="md" borderRadius="md" justifyContent="center" alignItems="center">
              <Text fontWeight="bold">
              Scenario: Imagine you just had lunch and you are walking to the cashing to pay for your food.
              </Text>
      
      <br></br>
      <p>After you paid, you are asked to rate the restaurant by scanning a QR code on a mounted phone. </p>
      <p>The phone shows a (refreshing) QR code that will create a unique identifier and directs you to the rating.</p>
      <br></br>
      <p>Your phone and the restaurants phone co-sign a transaction which verifies that: </p>
      <p>- you were here </p>
      <p>- at this point in time</p>
      <p>- your humanhood (Worldcoin)</p>
      <br></br>
      <p>The message of this transaction contains your rating of the restaurant.</p>
      <p>Sharing feedback earns your loyalty tokens.</p>
      <br></br>
        <Flex justifyContent="left" alignItems="left" height="100%">
            <Image 
              src="/images/Setting.png"
              alt="Placeholder preview of templates"
              width={600}
              height={400}
            />
        </Flex>
      <br></br>
      <p>Since we can not demo you the full experience online, we like to ask you to do the following:</p>
      <p>1. Open your phone and scan the QR code below.</p>
      <p>2. Then click the link below in your browser to proof your humanhood (simulator), then provide the rating.</p>
      </Box>
      </div>

      <Flex justifyContent="flex-end" position="fixed" top={4} right={4} zIndex={10}>
        <Button onClick={onOpen}>Learn what happens under the hood</Button>

              <Modal isOpen={isOpen} onClose={onClose} size="xl">
                  <ModalOverlay />
                  <ModalContent color="black">
                      <ModalHeader>Keypass wallet creation and economics</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
              <Text mb={4}>
                  (Out of demo scope, most of keypass from previous hackathon) We imagine that when a customer uses the loyalty protocol the first time, a keypass is created on the users phone (iCloud backed). 
              </Text>
              <Text fontWeight="bold">
                  How it works:
              </Text>
              <Text mb={4}>
                  If a customer uses the protocol, the passkeys (unique identifier) are recognized and the user can sign in.
                  See the creation process of the passkey and the login process below.
              </Text>

              <Flex justifyContent="flex-start" alignItems="flex-start" height="100%" mb={4}>
                  <video width="600" height="400" controls>
                      <source src="/images/passkey.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </Flex>

              <Text fontWeight="bold">
                  Wallet creation:
              </Text>

              <Text mb={4}>
                  After a few ratings linked to the keypass, the protocols trigger the creation of a keypass (iCloud backup) linked smart wallet.
                  To this wallet, the reward tokens are issued every additioanl time a rating is performed. 
                  </Text>
              <Text fontWeight="bold">
                  Economics:
              </Text>
              <Text mb={4}>
                  The reward tokens are tradable and can be used to buy food in restaurants. 
                  The tokens are valuable since restaurants have to buy them to advertise within the protocol. We imagine:
              </Text>

              <List spacing={2} mb={4}>
                  <ListItem>- Airdrop loyalty cards for customers</ListItem>
                  <ListItem>- Advertise within the protocol/app</ListItem>
                  <ListItem>- Restaurants have to pay loyalty gas to reply to feedback</ListItem>
                  <ListItem>- Unlock additional premium features</ListItem>
              </List>

              <Text fontWeight="bold">
                  Payments:
              </Text>
              <Text mb={4}>
                  Given a large protocol user base, one could implement a payment feature using the same QR code that is used for the rating.
                  Fees could be much lower then Credit Card fees, but would further enhance the token value. This opens the opportunity for staking.
              </Text>



          </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
          </Flex>

      

      <div >
      <Box p={50} shadow="md" borderRadius="md">
        <p>Step 1: Please open World ID Simulator App via your Phone</p>
      <div className={styles.card}>
        <Image 
          src="/images/qr_wc_simulator.png"
          alt="Open Simulator App"
          width={300}
          height={300}
        />
      </div>
      </Box>
      </div>

      <div>
      <Box p={50} shadow="md" borderRadius="md">
      <p>Step 2: Please click link below to generate World ID QR code.</p>
      <p>On your phone: Click [Scan QR or Paste data], then scan the code shown in the desktop browser.</p>
      <p>When verified on your phone, close the success page (hit x). This will be forwarded to the rating page.</p>
      <br></br>
          <IDKitWidget
          app_id="app_staging_8698f33d5c7e58f388c9bebad26012bd" // obtained from the Developer Portal (layality app)
          //action="vote_1" // this is your action name from the Developer Portal
          //signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
          onSuccess={onSuccess}
          //credential_types={['orb', 'phone'] as CredentialType[]}
          // credential_types={[CredentialType.Orb, CredentialType.Phone]}
          //credential_types={['orb', 'phone']} // the credentials you want to accept
          // @ts-ignore
          credential_types={['orb', 'phone']}
          enableTelemetry
        >
          {({ open }) => <button onClick={open}>👉 Verify with World ID</button>}
        </IDKitWidget>
        </Box>
      </div>


       {/* NOT NEEDED AS WE WILL FORWARD TO URL  */}
       {/*  
      <div className={styles.card}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="restaurantName" isRequired mb={4}>
          <FormLabel>Restaurant Name</FormLabel>
          <Input 
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="Enter restaurant name"
          />
        </FormControl>

        <FormControl id="timestamp" isRequired mb={4}>
          <FormLabel>Timestamp</FormLabel>
          <Input
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
        </FormControl>
        
        <Button colorScheme="blue" type="submit">Load</Button>
      </form>
    </Box>
      </div>
      */}


    </main>
    </Flex>
    </ChakraProvider>
    
  );
};

export default Home;
