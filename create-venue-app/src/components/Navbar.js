import { Flex, Box, Link, Icon, useMediaQuery, Text } from "@chakra-ui/react";
import { ChatIcon, InfoIcon, EmailIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';

const Navbar = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    return (
        <Box 
            bg="blue.500" 
            p={4} 
            position={isLargerThan768 ? "initial" : "fixed"} 
            bottom={0} 
            width="100%" 
            zIndex={10}
        >
            <Flex justify="space-around" wrap="wrap">
                <Box as={NextLink} href="/" px={2} _hover={{ textDecoration: 'none' }}>
                    <Link color="white">
                        {isLargerThan768 ? <Text>Home</Text> : <Icon as={ChatIcon} boxSize={6} />}
                    </Link>
                </Box>
                <Box as={NextLink} href="/about" px={2} _hover={{ textDecoration: 'none' }}>
                    <Link color="white">
                        {isLargerThan768 ? <Text>About</Text> : <Icon as={InfoIcon} boxSize={6} />}
                    </Link>
                </Box>
                <Box as={NextLink} href="/contact" px={2} _hover={{ textDecoration: 'none' }}>
                    <Link color="white">
                        {isLargerThan768 ? <Text>Contact</Text> : <Icon as={EmailIcon} boxSize={6} />}
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
