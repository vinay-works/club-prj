import React from 'react';

import { ChakraProvider, Container, Box, Flex, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <ChakraProvider>
      <Box
        bg="gray.900"
        bgImage="url('https://example.com/background-image.jpg')" // Replace with your desired background image URL
        bgSize="cover"
        bgPosition="center"
        h="100vh"
      >
        <Container maxW="xl" pt={20}>
          <Flex align="center" justify="center" direction="column" textAlign="center" color="white">
            <Heading as="h1" size="xl" mb={6}>
              Welcome to Our Company
            </Heading>
            <Text fontSize="lg" mb={8}>
              We are a team of dedicated professionals passionate about what we do.
            </Text>
            <Text fontSize="lg" mb={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempus quam. Morbi placerat
              consequat ex, et fringilla felis ultricies ac. Vivamus et varius nunc, in pharetra nunc. Curabitur
              sit amet metus et orci volutpat finibus.
            </Text>
            <Text fontSize="lg" mb={8}>
              Quisque consectetur eleifend tellus, nec lacinia enim gravida a. Donec viverra euismod est in
              ullamcorper. Nullam vel dapibus ligula, ac congue ligula. Nulla facilisi. Integer aliquam
              vestibulum sapien, a scelerisque erat iaculis vitae.
            </Text>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default About;
