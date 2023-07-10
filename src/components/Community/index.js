import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Divider,
  Avatar,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const Community = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = () => {
    if (postContent.trim() !== '') {
      const newPost = {
        content: postContent,
        author: 'Test Profile', // You can replace this with the user's name from authentication
        timestamp: new Date().toLocaleString(),
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setPostContent('');
    }
  };

  return (
    <Box py={10}>
      <Container maxW="xl">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" mb={6}>
            Community Forum
          </Heading>
          <FormControl>
            <FormLabel>New Post</FormLabel>
            <Textarea
              value={postContent}
              onChange={handleInputChange}
              rows={4}
              resize="vertical"
              placeholder="Type your post here..."
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handlePostSubmit}>
            Post
          </Button>
          <Divider />
          <VStack spacing={4} align="stretch">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Box key={index} p={4} borderWidth={1} borderRadius="md">
                  <Flex align="center">
                    <Avatar name={post.author} size="sm" mr={2} />
                    <Text fontWeight="bold">{post.author}</Text>
                    <Spacer />
                    <Text fontSize="sm" color="gray.500">
                      {post.timestamp}
                    </Text>
                  </Flex>
                  <Text mt={2}>{post.content}</Text>
                </Box>
              ))
            ) : (
              <Text>No posts yet.</Text>
            )}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Community;
