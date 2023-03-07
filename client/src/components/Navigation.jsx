import { Box, Flex,Image,Text,Input } from '@chakra-ui/react'
import React from 'react'
import { logo } from './../assets/imageLinks';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Flex justify={"space-between"} alignItems="center" px="2rem" py={"10px"}> 
        <Image boxSize={"3rem"} src={logo}/>
        <Flex w="60%" gap="1rem" fontWeight={"bold"}>
            <Link to="/chat-gpt/chat">ChatGPT</Link>
            <Link to="/dalle">DALL-E</Link>``
        </Flex>
        {/* <Input variant={'unstyled'} bg="rgba(255, 255, 255, 0.87)" type={"search"} /> */}
        <Text>Search</Text>
    </Flex>
  )
}

export default Navigation