import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";

const socials = [
  {
    name: "email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    name: "github",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    name: "linkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
];

const Header = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    let prevYPos = window.scrollY;
    const handleScroll = () => {
      const currYPos = window.scrollY;
      const headerElement = ref.current;
      if (!headerElement) return;
      if (prevYPos < currYPos) {
        headerElement.style.transform = "translateY(-200px)";
      } else {
        headerElement.style.transform = "translateY(0px)";
      }
      prevYPos = currYPos;
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const handleClick = (anchor) => () => {
    console.log(`handleClick called with anchor: ${anchor}`);
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={ref}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#E6BEAE"
      zIndex={1}
    >
      <Box color="#1F1F1F" maxWidth="1280px" margin="0 auto" fontSize="l">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              gap="1rem">
              {socials.map((social) => {
                return (
                  <a href={social.url} key={social.name}>
                    <FontAwesomeIcon icon={social.icon} size="2x" alt={social.name}/>
                  </a>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
