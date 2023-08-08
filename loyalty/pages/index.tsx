import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// 1. import `ChakraProvider` component

import { ChakraProvider, extendTheme, Input, Box, Button, FormControl, FormLabel, 
} from "@chakra-ui/react";

import Image from "next/image";
import { NextPage } from "next";
import React, { useState } from 'react';
import { useRouter } from 'next/router';


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



  return (
    <ChakraProvider theme={theme}>
    <main className={styles.main}>

      <div className={styles.button}>
        <ConnectWallet/>
      </div>
      
      <div >
        <Image 
          src="/images/loyalty_logo.png"
          alt="Placeholder preview of templates"
          width={300}
          height={200}
        />
      </div>

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
    </main>
    </ChakraProvider>
  );
};

export default Home;
