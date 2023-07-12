import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const Gallery = () => {
  // Dummy image URLs for demonstration
  const galleryImages = [
    'https://www.chartoo.in/itunes/app/543186831-8-ball-pool%E2%84%A2',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <ChakraProvider>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
          Gallery
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-secondary-900">
          The club's facilities, tournaments, and achievements.
        </h1>
      </div>
      {/* Your existing code */}
      <Container maxW="xl" mt={20}>
        <Heading as="h3" size="md" mb={2}>
          <SimpleGrid columns={2} spacing={4}>
            {galleryImages.map((image, index) => (
              <Box
                key={index}
                bg="Secondary.100"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
              >
                <Image src={image} alt={`Gallery Image ${index}`} />
              </Box>
            ))}
          </SimpleGrid>
          {/* Rest of your code */}
        </Heading>
      </Container>
    </ChakraProvider>
  );
};

export default Gallery;
