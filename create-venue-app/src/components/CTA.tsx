import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={14}
    width="full"
    maxWidth="3xl"
    py={3}
    justifyContent={["center", "center", "flex-start", "flex-start"]} // Center on mobile, default on larger screens
  >
    <Button
      as={ChakraLink}
      isExternal
      href="https://chakra-ui.com"
      variant="outline"
      colorScheme="blue"
      rounded="button"
      flexGrow={1}
      mx={2}
      width={["full", "full", "auto", "auto"]}  // full width on mobile, auto on desktop
      maxWidth={["full", "full", "200px", "200px"]}  // maximum width on desktop
      
    >
      Sign-in
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      variant="solid"
      colorScheme="blue"
      rounded="button"
      flexGrow={3}
      mx={6}
      width={["full", "full", "auto", "auto"]}  // full width on mobile, auto on desktop
      maxWidth={["full", "full", "200px", "200px"]}  // maximum width on desktop
    >
      Create Account
    </Button>
  </Container>
)
