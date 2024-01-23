import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    type: "General",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // You can add your logic here to submit the feedback
    // For now, just simulate a successful submission
    setSubmitted(true);

    // Show a toast message
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6", padding: "2rem" }}>
      <Box
        p={8}
        backgroundColor="white"
        borderRadius="1rem"
        boxShadow="xl"
        maxW="md"
        mx="auto"
      >
        <Heading mb={4}>Feedback Form</Heading>
        {submitted && (
          <Alert status="success" mb={4} rounded="md">
            <AlertIcon />
            Feedback submitted successfully!
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        )}
        <Tabs>
          <TabList>
            <Tab>Company</Tab>
            <Tab>Website</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    // value={feedback.name}
                    // onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Company Role</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    // value={feedback.name}
                    // onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="type" isRequired>
                  <FormLabel>Feedback Type</FormLabel>
                  <Select
                    name="type"
                    value={feedback.type}
                    onChange={handleInputChange}
                  >
                    <option value="General">General</option>
                    <option value="Bug">Unintened behaviour</option>
                    <option value="Feature Request">
                      WorkSpace Discrimination
                    </option>
                  </Select>
                </FormControl>
                <FormControl id="comments" isRequired>
                  <FormLabel>Comments</FormLabel>
                  <Textarea
                    name="comments"
                    value={feedback.comments}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button
                  backgroundColor="#2234da"
                  color="white"
                  onClick={handleSubmit}
                >
                  Submit Feedback
                </Button>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="type" isRequired>
                  <FormLabel>Feedback Type</FormLabel>
                  <Select
                    name="type"
                    value={feedback.type}
                    onChange={handleInputChange}
                  >
                    <option value="General">General</option>
                    <option value="Bug">Bug</option>
                    <option value="Feature Request">Feature Request</option>
                  </Select>
                </FormControl>
                <FormControl id="comments" isRequired>
                  <FormLabel>Comments</FormLabel>
                  <Textarea
                    name="comments"
                    value={feedback.comments}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <Button
                  backgroundColor="#2234da"
                  color="white"
                  onClick={handleSubmit}
                >
                  Submit Feedback
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="type" isRequired>
            <FormLabel>Feedback Type</FormLabel>
            <Select
              name="type"
              value={feedback.type}
              onChange={handleInputChange}
            >
              <option value="General">General</option>
              <option value="Bug">Bug</option>
              <option value="Feature Request">Feature Request</option>
            </Select>
          </FormControl>
          <FormControl id="comments" isRequired>
            <FormLabel>Comments</FormLabel>
            <Textarea
              name="comments"
              value={feedback.comments}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            backgroundColor="#2234da"
            color="white"
            onClick={handleSubmit}
          >
            Submit Feedback
          </Button>
        </VStack> */}
      </Box>
    </div>
  );
};

export default Feedback;
