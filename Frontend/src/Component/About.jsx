import React from 'react';
import { Box, Heading, Text, Image, VStack, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box 
      id={'profile'} 
      marginX={{base:"auto",md:'280px'}}
      marginTop={'40px'} 
      padding={'2px'} 
      backgroundColor={'#fafaf8'} 
      borderRadius={'20px'} 
      boxShadow={'0px 1px 2px 0px rgba(0, 0, 0, 0.12)'}
      width={{ base: '90%', md: '75%' }} // Slightly increased width for mobile
      paddingX={{ base: '10px', md: '20px' }} // Ensuring text does not touch edges
    >
      <Stack 
        direction={{ base: 'column', md: 'row' }} 
        marginTop={'10px'}
        align="center"
        spacing={{ base: '20px', md: '30px' }}
        paddingBottom={{base:'0px',md:'30px'}}
        paddingTop={{base:'0px',md:'10px'}}
      >
        <Image 
          src='images/about.webp' 
          height={{ base: '160px', md: '270px' }} 
          width={{ base: '100%', md: '500px' }} 
          borderRadius={'10px'}
          boxShadow="lg"
          objectFit={'cover'}
        />

        <VStack 
          align="center" 
          spacing="10px" 
          textAlign="center" 
          maxW="100%" 
          width="100%" 
          paddingX={{ base: '10px', md: '0px' }} // Added padding for small screens
        >
          <Heading 
            fontSize={{ base: "2xl", md: "4xl" }} 
            color="black"
            fontFamily="sans-serif"
          >
            About Me
          </Heading>

          <Text 
  as="span"
  fontSize={{ base: "md", md: "lg" }} 
  color="gray.800" 
  fontFamily="sans-serif"
  lineHeight="1.8"
  wordBreak="break-word"
  width="100%" 
  paddingLeft={{ base: '0px', md: '20px' }}
  textAlign={'justify'}
>
  I am a passionate <Text as="span" color="#FACC15" fontWeight="bold" textAlign={'left'}>Software Developer</Text> 
  with experience in <Text as="span" color="#FACC15" fontWeight="bold" textAlign={'left'}>MERN Stack</Text>. 
  I love solving problems and building efficient, scalable applications. Beyond coding, I enjoy 
  <Text as="span" color="#FACC15" fontWeight="bold" textAlign={'left'}> exploring new technologies, problem-solving, 
  and contributing to open-source projects</Text>. My goal is to deliver impactful solutions that 
  enhance user experience and drive innovation. I enjoy working on real-world challenges, 
  collaborating with teams, and bringing ideas to life.
</Text>

        </VStack>
      </Stack>
    </Box>
  );
};

export default About;
