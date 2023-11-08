import {
  Text,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { WebAuthn } from "@dfns/sdk-webauthn";
import { useState, FormEvent } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [result, setResult] = useState(undefined)
  
  const register = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email') as string

    fetch('/api/register/init', { method: 'POST', body: JSON.stringify({ email }) })
      .then((result) => result.json())
      .then(async (challenge) => {
        console.log('register init challenge', challenge)
        const webauthn = new WebAuthn({ rpId: process.env.NEXT_PUBLIC_DFNS_WEBAUTHN_RPID! })
        const attestation = await webauthn.create(challenge)
        return fetch('./api/register/complete', {
          method: 'POST',
          body: JSON.stringify({
            tempAuthToken: challenge.temporaryAuthenticationToken,
            signedChallenge: { firstFactorCredential: attestation },
          }),
        })
      })
      .then((result) => result.json())
      .then((result) => setResult(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  return (
    <Container height="100vh">
      <Link href="/">
        <Hero />
      </Link>
      <Main>
        <Text color="text" fontSize={"xs"} textAlign={"center"}>
          Welcome screen. Here’ we'll provide a welcome section to our venues,
          just some basic content to explain what’s the purpose of SIGNA Seal.
        </Text>
        <form onSubmit={register}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <InputGroup>
            <Input name="email" type="email" disabled={loading} />
            <InputRightElement width="5.5rem">
              <Button isLoading={loading} h="1.75rem" size="sm" type="submit">
                Register
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        </form>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>By Spyglass Ventures ©</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
