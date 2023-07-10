import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';

const CoachingResources = () => {
  const tutorials = [
    {
      title: 'Snooker Basics',
      description: 'Learn the fundamental techniques and rules of snooker.',
      image: 'snooker_basics.jpg',
    },
    {
      title: 'Advanced Strategies',
      description: 'Discover advanced strategies to improve your gameplay.',
      image: 'advanced_strategies.jpg',
    },
    {
      title: 'Shot Analysis',
      description: 'Learn how to analyze shots and make better decisions on the table.',
      image: 'shot_analysis.jpg',
    },
    {
      title: 'Cueing Techniques',
      description: 'Master various cueing techniques to enhance your accuracy and control.',
      image: 'cueing_techniques.jpg',
    },
  ];

  const lessons = [
    {
      title: 'Breaking Techniques',
      instructor: 'Ronnie O\'Sullivan',
      image: 'ronnie_osullivan_lessons.jpg',
    },
    {
      title: 'Safety Play Strategies',
      instructor: 'Mark Selby',
      image: 'mark_selby_lessons.jpg',
    },
    {
      title: 'Long Potting Mastery',
      instructor: 'Neil Robertson',
      image: 'neil_robertson_lessons.jpg',
    },
  ];

  return (
    <Box py={10}>
      <Container maxW="xl">
        <VStack spacing={6} align="center">
          <Heading as="h1" size="xl" mb={6}>
            Coaching Resources
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Explore a wide range of tutorials, tips, and video lessons to enhance your snooker skills.
          </Text>
          <Heading as="h2" size="lg" mt={8}>
            Tutorials
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
            {tutorials.map((tutorial, index) => (
              <GridItem key={index}>
                <Image src={`/images/${tutorial.image}`} alt={tutorial.title} />
                <Heading as="h3" size="md" mt={4} mb={2}>
                  {tutorial.title}
                </Heading>
                <Text>{tutorial.description}</Text>
              </GridItem>
            ))}
          </Grid>
          <Heading as="h2" size="lg" mt={10}>
            Video Lessons
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
            {lessons.map((lesson, index) => (
              <GridItem key={index}>
                <Image src={`/images/${lesson.image}`} alt={lesson.title} />
                <Heading as="h3" size="md" mt={4} mb={2}>
                  {lesson.title}
                </Heading>
                <Text>Instructor: {lesson.instructor}</Text>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CoachingResources;
