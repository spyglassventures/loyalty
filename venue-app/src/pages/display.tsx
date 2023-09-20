import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

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
      <Text color="text" fontSize={"xs"} textAlign={"center"}>
        Display screen. Here we’ll provide all the tools needed to switch the
        iphone to “Kiosk” mode, and to display the signed QR code.
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
