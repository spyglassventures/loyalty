import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
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
