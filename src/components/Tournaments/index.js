import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  //Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const Tournament = () => {
  const [tournamentData, setTournamentData] = useState({ name: '', date: '', rules: '', prizes: '' });
  const [participants, setParticipants] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTournamentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleParticipantAdd = () => {
    const newParticipant = tournamentData.name.trim();
    if (newParticipant) {
      setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
      setTournamentData((prevData) => ({ ...prevData, name: '' }));
    }
  };

  const handleFixtureGenerate = () => {
    // Generate fixtures logic here
    // You can use a library or implement your own algorithm
    // Store the generated fixtures in the state variable
    // For example:
    const generatedFixtures = [
      { round: 1, match: 'Player A vs Player B' },
      { round: 1, match: 'Player C vs Player D' },
      { round: 2, match: 'Winner 1 vs Winner 2' },
      { round: 3, match: 'Final: Winner 3 vs Winner 4' },
    ];
    setFixtures(generatedFixtures);
  };

  const handleResultSubmit = (fixtureIndex, result) => {
    // Update the result for the specified fixture
    setResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[fixtureIndex] = result;
      return updatedResults;
    });
  };

  return (
    <Box py={10}>
      <Container maxW="xl">
        <VStack spacing={6} align="center">
          <Heading as="h1" size="xl" mb={6}>
            Tournaments and Events
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={tournamentData.name}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                name="date"
                value={tournamentData.date}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Rules</FormLabel>
              <Input
                type="text"
                name="rules"
                value={tournamentData.rules}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Prizes</FormLabel>
              <Input
                type="text"
                name="prizes"
                value={tournamentData.prizes}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleParticipantAdd}>
              Add Participant
            </Button>
          </VStack>
          <Divider />
          <Heading as="h2" size="lg" mt={6}>
            Participants
          </Heading>
          <Table variant="striped" size="sm" mt={4}>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Participant</Th>
              </Tr>
            </Thead>
            <Tbody>
              {participants.map((participant, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{participant}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button colorScheme="teal" onClick={handleFixtureGenerate} mt={6}>
            Generate Fixtures
          </Button>
          {fixtures.length > 0 && (
            <>
              <Divider />
              <Heading as="h2" size="lg" mt={6}>
                Fixtures
              </Heading>
              <Table variant="striped" size="sm" mt={4}>
                <Thead>
                  <Tr>
                    <Th>Round</Th>
                    <Th>Match</Th>
                    <Th>Result</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {fixtures.map((fixture, index) => (
                    <Tr key={index}>
                      <Td>{fixture.round}</Td>
                      <Td>{fixture.match}</Td>
                      <Td>
                        <Input
                          type="text"
                          value={results[index] || ''}
                          onChange={(event) =>
                            handleResultSubmit(index, event.target.value)
                          }
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Tournament;
