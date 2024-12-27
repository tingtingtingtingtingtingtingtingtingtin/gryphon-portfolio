import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      rounded="xl"
      backgroundColor="white">
      <VStack >
        <Image
          src={imageSrc}
          rounded="xl"
        />
          <VStack gap="0.5rem" alignItems="left" margin="2px" padding="2rem" paddingTop="1rem">
            <Text fontSize="1.5rem" color="black">{title}</Text>
            <Text color="gray">{description}</Text>
            {link.length > 0 &&
              <HStack as="a" href={link}>  
                <Heading color="black" size="1rem">See more</Heading>
                <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
              </HStack>
            }
          </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
