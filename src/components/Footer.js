import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#E6BEAE">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="#1F1F1F"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Gryphon • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
