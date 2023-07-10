import React from 'react';

import { ChakraProvider, Box, Container, Heading, Text, VStack, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <ChakraProvider>
      <Box py={10}>
        <Container maxW="xl">
          <VStack spacing={6} align="center">
            <Heading as="h1" size="xl" mb={6}>
              Contact Us
            </Heading>
            <Text fontSize="lg">
              If you have any questions, feedback, or inquiries, please feel free to reach out to us.
            </Text>
            <Box w="full" maxW="md">
              <form>
                <VStack spacing={4}>
                  <Input type="text" placeholder="Name" required variant="filled" />
                  <Input type="email" placeholder="Email" required variant="filled" />
                  <Textarea placeholder="Message" required variant="filled" />
                  <Button type="submit" colorScheme="teal" size="lg">
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
            <Box mt={6}>
                <Text> Reach Out Us:</Text>
                <Text>Phone: +1 123-456-7890</Text>
                <Text>Email: example@example.com</Text>
              </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Contact;
