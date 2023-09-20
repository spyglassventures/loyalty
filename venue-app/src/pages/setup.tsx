import { Text } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Link from "next/link";

const Index = () => (
  <Container height="100vh">
    <Link href="/">
      <Hero />
    </Link>
    <Main>
    <Text color="text" fontSize={'xs'} textAlign={'center'}>
        Setup screen. Here’ we'll provide all relevant tools to onboard a venue and provide
        them with the ability to record their information on-chain.
      </Text>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>By Spyglass Ventures ©</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
