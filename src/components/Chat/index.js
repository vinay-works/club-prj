import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
} from '@chakra-ui/react';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);
    handleCloseChat();
  };

  return (
    <ChakraProvider>
      <Box py={10}>
        <Container maxW="xl">
          <VStack spacing={6} align="center">
            <Heading as="h1" size="xl" mb={6}>
              Welcome to the Club
            </Heading>
            <Text fontSize="lg">
              Enjoy your membership benefits and stay connected with us!
            </Text>
            <Button colorScheme="teal" size="lg" onClick={handleOpenChat}>
              Chat with Us
            </Button>
          </VStack>
        </Container>

        <Modal isOpen={isOpen} onClose={handleCloseChat}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Us</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" colorScheme="teal">
                    Send Message
                  </Button>
                </VStack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default Chat;
