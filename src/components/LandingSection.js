import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gryphon!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#ECF8F8"
    color="#2F4858"
  >
    <VStack
      gap="1rem">
      <Avatar 
        src="https://i.pravatar.cc/150?img=7"
        showBorder="true"
        borderColor="#2F4858"
        borderWidth="4px"
        size="4xl"
      />
      <Heading as="h1" size="2xl">{greeting}</Heading>
      <VStack>
        <Heading as="h2" size="xl">{bio1}</Heading>
        <Heading as="h2" size="xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
