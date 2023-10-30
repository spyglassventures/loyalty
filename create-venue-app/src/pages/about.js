// pages/about.js
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const About = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    return (
        <Box pb={isLargerThan768 ? "0" : "60px"}>
            <Navbar />
            <Box p={8}>
                <Heading>About Us</Heading>
                <Text mt={4}>
                    We are a passionate team dedicated to bringing the best products and services to our customers...
                </Text>
            </Box>
        </Box>
    );
};

export default About;