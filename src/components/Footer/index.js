import React from 'react';
import { ChakraProvider, Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.900" color="white" py={6}>
        <Flex align="center" justify="center" direction="column">
          <Text fontSize="sm" mb={2}>
            &copy; 2023 Your Company. All rights reserved.
          </Text>
          <Text fontSize="sm" mb={4}>
            Made with ❤️ by Your Name
          </Text>
          <Flex>
            <Link color="white" mx={2}>
              About
            </Link>
            <Link color="white" mx={2}>
              Services
            </Link>
            <Link color="white" mx={2}>
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Footer;
