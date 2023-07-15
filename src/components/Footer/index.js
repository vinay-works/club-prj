import React from "react";
import { ChakraProvider, Box, Flex, Text, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.900" color="white" py={6}>
        <Flex align="center" justify="center" direction="column">
          <Text fontSize="sm" mb={2}>
            &copy; 2023 Your Company. All rights reserved.
          </Text>
          <Text fontSize="sm" mb={4}>
            Made with ❤️ by Team Enigma
          </Text>
          <Flex>
            <Link href={"https://www.facebook.com/"} target="_blank" color="white" mx={2}>
              <FaFacebook />
            </Link>
            <Link href={"https://twitter.com/"} target="_blank" color="white" mx={2}>
              <FaTwitter />
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank" color="white" mx={2}>
              <FaInstagram />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
