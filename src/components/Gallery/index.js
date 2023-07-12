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
  // Dummy image URLs 
  const galleryImages = [
    'https://img.freepik.com/free-vector/casino-card-element_1394-1884.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/casino-tokens-yellow-background_23-2148952332.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/falling-casino-dices-aces-concept-winning-gambling-poker-card-games_206725-69.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-vector/casino-symbols_1017-7745.jpg?size=626&ext=jpg',

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
      <Container maxW="xl" mt={20} >
        <Heading as="h3" size="md" mb={2}>
          <SimpleGrid columns={2} spacing={4}>
            {galleryImages.map((image, index) => (
              <Box
                flex flex-col imageFit="cover"
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
        </Heading>
      </Container>
    </ChakraProvider>
  );
};

export default Gallery;
