import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

import Image from "next/image";
import { NextPage } from "next";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
    <main className={styles.main}>

      <div className={styles.button}>
        <ConnectWallet/>
        <form onSubmit={handleSubmit}>
          <input
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="Enter restaurant name"
          />
          <input
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <button type="submit">Load</button>
        </form>
      </div>
      
      <div className={styles.container}>
        <Image
          src="/images/loyalty_logo.png"
          alt="Placeholder preview of templates"
          width={300}
          height={200}
        />
      </div>
    </main>
  );
};

export default Home;
