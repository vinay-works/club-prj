import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const CoachingResources = () => {
  const tutorials = [
    {
      title: "Snooker Basics",
      description: "Learn the fundamental techniques and rules of snooker.",
      image:
        "https://cdn.pixabay.com/photo/2014/04/10/18/52/billiard-321222_640.jpg",
    },
    {
      title: "Advanced Strategies",
      description: "Discover advanced strategies to improve your gameplay.",
      image:
        "https://cdn.pixabay.com/photo/2017/06/21/21/28/pool-2428654_640.jpg",
    },
    // ... (add other tutorial objects as needed)
  ];

  const lessons = [
    {
      title: "Breaking Techniques",
      instructor: "Ronnie O'Sullivan",
      image:
        "https://media.istockphoto.com/id/1387508702/photo/american-snooker-billiard-balls-on-the-pool-table.webp?b=1&s=612x612&w=0&k=20&c=JxziVNVjNhPueHx-uTipumZk7Zw7Vk6LdjzYzcT5XEI=",
      videoLink: "https://youtu.be/aeSDWuyeTSE", // Replace with the actual video URL
    },
    {
      title: "Safety Play Strategies",
      instructor: "Mark Selby",
      image:
        "https://cdn.pixabay.com/photo/2016/08/14/19/53/pool-1593845_640.jpg",
      videoLink: "https://www.example.com/video2", // Replace with the actual video URL
    },
    // ... (add other lesson objects as needed)
  ];

  return (
    <Box py={10}>
      <Container maxW="xl">
        <VStack spacing={6} align="center">
          <Heading as="h1" size="xl" mb={6}>
            Coaching Resources
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Explore a wide range of tutorials, tips, and video lessons to
            enhance your snooker skills.
          </Text>
          <Heading as="h2" size="lg" mt={8}>
            Tutorials
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
            {tutorials.map((tutorial, index) => (
              <GridItem key={index}>
                <Image src={tutorial.image} alt={tutorial.title} />
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
                <Image src={lesson.image} alt={lesson.title} />
                <Heading as="h3" size="md" mt={4} mb={2}>
                  {lesson.title}
                </Heading>
                <Text>Instructor: {lesson.instructor}</Text>
                {/* If you are using video URLs */}
                <a
                  href={lesson.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>

                {/* If you are using video files in the public/videos folder */}
                {/* Replace "videos" with your actual folder name if different */}
                {/* <video width="320" height="240" controls>
                  <source src={`/videos/${lesson.videoFile}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CoachingResources;
