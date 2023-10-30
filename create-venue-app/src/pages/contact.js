// pages/contract.js
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <Box>
            <Navbar />
            <Box p={8}>
                <Heading>Contact</Heading>
                <Text mt={4}>
                    We are a passionate team dedicated to bringing the best products and services to our customers. With years of experience in our respective fields, we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our mission is to continuously improve and adapt to the ever-changing market demands while maintaining the highest standards of excellence. Thank you for taking the time to learn more about us. We look forward to serving you.
                </Text>
            </Box>
        </Box>
    );
};

export default Contact;
