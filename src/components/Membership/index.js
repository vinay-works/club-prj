import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Heading,
  Text,
  //VStack,
  //Badge,
} from "@chakra-ui/react";

const Membership = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleSelectMembership = (membership) => {
    setSelectedMembership(membership);
  };

  const handlePayment = () => {
    // Perform payment logic here
    if (selectedMembership) {
      // Process payment for the selected membership
      console.log(`Payment processed for ${selectedMembership}`);
    } else {
      console.log('Please select a membership');
    }
};

  return (
    <ChakraProvider>
      {/* Your existing code */}
      <Container maxW="xl" mt={20}>

        {/* Premium Membership */}
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={6}
          mb={4}
        >
          <Heading as="h3" size="md" mb={2}>
            Premium Membership
          </Heading>
          <Text mb={4}>Access exclusive features</Text>
          <Button
            colorScheme={selectedMembership === 'Premium' ? 'green' : 'blue'}
            onClick={() => handleSelectMembership('Premium')}
            disabled={selectedMembership === 'Premium'}
          >
            {selectedMembership === 'Premium' ? 'Selected' : 'Select'}
          </Button>
        </Box>
        {/* Premium Plus Membership */}
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={6}
          mb={4}
        >
          <Heading as="h3" size="md" mb={2}>
            Premium Plus Membership
          </Heading>
          <Text mb={4}>Access additional premium features</Text>
          <Button
            colorScheme={selectedMembership === 'Premium Plus' ? 'green' : 'blue'}
            onClick={() => handleSelectMembership('Premium Plus')}
            disabled={selectedMembership === 'Premium Plus'}
          >
            {selectedMembership === 'Premium Plus' ? 'Selected' : 'Select'}
          </Button>
        </Box>
        {/* Pay Now Button */}
        <Box textAlign="center" > 
          <Text mb={4}>Selected Membership: {selectedMembership}</Text>
          <br/>
          {/*how to link an url to a button here*/}
          <Link to={'https://buy.stripe.com/test_00g3fIchCdUgcMw7ss'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Button colorScheme="teal"  size="md" onClick={handlePayment} disabled={!selectedMembership}>
            Pay Now
          </Button>
          </Link>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Membership;
