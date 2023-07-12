import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Text, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';


const Reservation = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationData, setReservationData] = useState({ name: '', email: '', table: '', date: '', time: '' });


  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReservationSubmit = () => {
    // Implement your reservation submission logic here
    // For example, you can make an API call to process the reservation and payment
    // Once the reservation is successfully submitted, you can show a success toast message
    toast({
      title: 'Reservation Successful',
      description: 'Your reservation has been confirmed.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Reset the form data and close the modal
    setReservationData({ name: '', email: '', table: '', date: '', time: '' });
    handleCloseModal();
  };

  const toast = useToast();

  return (
    <ChakraProvider>
      <Box py={10}>
        <Container maxW="xl">
          <VStack spacing={6} align="center">
            <Heading as="h1" size="xl" mb={6}>
              Snooker Table Reservation
            </Heading>
            <Text fontSize="lg">
              Select a date and time from the calendar to book a snooker table.
            </Text>
            {/*<DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="form-control"
  />*/}
            {selectedDate && (
              <>
                <Text fontSize="lg" fontWeight="bold" mt={4}>
                  Available Time Slots for {selectedDate.toLocaleDateString()}
                </Text>
                <VStack spacing={2}>
                  <Button
                    size="md"
                    colorScheme={selectedTime === '10:00 AM' ? 'teal' : 'gray'}
                    onClick={() => handleTimeChange('10:00 AM')}
                  >
                    10:00 AM
                  </Button>
                  <Button
                    size="md"
                    colorScheme={selectedTime === '12:00 PM' ? 'teal' : 'gray'}
                    onClick={() => handleTimeChange('12:00 PM')}
                  >
                    12:00 PM
                  </Button>
                  <Button
                    size="md"
                    colorScheme={selectedTime === '02:00 PM' ? 'teal' : 'gray'}
                    onClick={() => handleTimeChange('02:00 PM')}
                  >
                    02:00 PM
                  </Button>
                  <Button
                    size="md"
                    colorScheme={selectedTime === '04:00 PM' ? 'teal' : 'gray'}
                    onClick={() => handleTimeChange('04:00 PM')}
                  >
                    04:00 PM
                  </Button>
                </VStack>
              </>
            )}
            {selectedTime && (
              <Button size="lg" colorScheme="teal" onClick={handleOpenModal}>
                Book Snooker Table
              </Button>
            )}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Book Snooker Table</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={reservationData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={reservationData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Table</FormLabel>
                    <Input
                      type="text"
                      name="table"
                      value={reservationData.table}
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Date</FormLabel>
                    <Input
                      type="text"
                      name="date"
                      value={selectedDate?.toLocaleDateString()}
                      isReadOnly
                      required
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Time</FormLabel>
                    <Input
                      type="text"
                      name="time"
                      value={selectedTime}
                      isReadOnly
                      required
                    />
                  </FormControl>
                  <Button colorScheme="teal" onClick={handleReservationSubmit}>
                    Confirm Reservation
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Reservation;
