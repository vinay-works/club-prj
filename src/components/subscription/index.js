import React, { useState } from "react";
import { Box, Input, Button, Container, Heading, Alert } from "@chakra-ui/react";

const Subscription = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const { name, email } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/vinayts/google_sheets/HUzDPFdHkJquqQCP?tabId=sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, new Date().toLocaleString()]]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "" });
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box textAlign="center">
      <Container maxW="md" py={8}>
        <Heading as="h1" mb={4}>
          Subscribe to our platform...
        </Heading>
        <Box shadow="md" p={5} mt={5}>
          {showAlert && (
            <Alert status="success" mb={4}>
              Subscription successful!
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleChange}
              />
            </Box>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscription;
