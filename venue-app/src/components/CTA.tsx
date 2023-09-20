import { Link as ChakraLink, Button } from '@chakra-ui/react'
import Link from 'next/link'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    <Button
      as={Link}
      href="/setup"
      variant="outline"
      colorScheme="teal"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >
      💈 Setup venue
    </Button>
    <Button
      as={Link}
      href="/display"
      variant="solid"
      colorScheme="teal"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      📸 Display venue
    </Button>
  </Container>
)
