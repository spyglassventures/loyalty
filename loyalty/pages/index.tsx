import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// 1. import `ChakraProvider` component

import { ChakraProvider, extendTheme, Flex, Input, Box, Button, FormControl, FormLabel, 
} from "@chakra-ui/react";

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
      <Box p={50} shadow="md" borderRadius="md">
        <p>Step 1: Please open World ID Simulator App via Phone</p>
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
      <p>Step 2: Please click here to generate World ID QR code.</p>
      <p>You can scan the code with the Simulator on your phone.</p>
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
