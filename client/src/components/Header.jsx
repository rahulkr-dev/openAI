import React from 'react'
import { careers_image, landingPage_bg, landing_chatGPT } from './../assets/imageLinks';
import { Box, Image, Heading, Button, Flex, Text, Grid, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ImageCard = ({ url, text, date }) => (
    <Box>
        <Image src={url} />
        <Text mt="8px">{text}</Text>
        <Text fontWeight={"bold"}>{date}</Text>
    </Box>
)
const Header = () => {
    return (
        <>

            <Box pos={"relative"}>
                <Image src={landingPage_bg} opacity=".5" />
                <Heading fontSize={["1.1rem", "2em", "2.5rem", "3.5rem"]} fontWeight={"bold"} pos="absolute" top={"40%"} left="50%" transform={"translate(-50%,-50%)"}>
                    Creating safe artificial general intelligence that benefits all of humanity
                </Heading>
                <Button colorScheme={"telegram"} variant={"outline"} pos="absolute" top={"70%"} left="25%" >
                    Learn About OpenAI
                </Button>
            </Box>
            <Flex mt="2rem" borderTop={"2px solid white"} gap="1rem" py="2rem" borderBottom={"2px solid white"}>

                <Image w="50%" src={landing_chatGPT} />
                <Box pt="2rem" pr="1.5rem" >
                    <Heading>ChatGPT</Heading>
                    <Text w={["100%", "98%", "90%", "60%"]}>
                        {`We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
                        null links`}
                    </Text>
                    <Box mt="1.5rem">   <Link>Try ChatGPT</Link></Box>
                    <Box>
                        <Link>Read about ChatGPT</Link>
                    </Box>

                </Box>
            </Flex>
            <Grid gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]} p={"1.5rem"}>
                <Heading fontSize={"3rem"}>Research</Heading>
                <Box>
                    <Text fontSize={"1.6rem"}>
                        We research generative models and how to align them with human values.
                    </Text>
                    <Link>Learn about latest research</Link>
                </Box>
            </Grid>

            <Grid p="1rem" gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]} gap="1rem">
                <ImageCard url="https://openaicom.imgix.net/2e288b87-2d80-4fa6-abea-5d9e650d7143/forecasting-misuse.png?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2304,2304&w=2880&h=2880"
                    text="Forecasting potential misuses of language models for disinformation campaigns and how to reduce risk"
                    date="Jan 11, 2023" />

                <ImageCard url="https://openaicom.imgix.net/7e4ba260-7655-4049-90a2-d4eb5bef3c5c/point-e-a-system-for-generating-3d-point-clouds-from-complex-prompts.png?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2064,2064&w=2880&h=2880"
                    text="Point-E: A system for generating 3D point clouds from complex prompts"
                    date="Dec 16, 2022" />

                <ImageCard url="https://openaicom.imgix.net/13c810cb-0592-442d-9580-714838b8ed28/whisper.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2048,2048&w=2880&h=2880"
                    text="Introducing Whisper"
                    date="Sep 21, 2022" />

                <ImageCard url="https://openaicom.imgix.net/d22f177f-5116-4b3b-bdc8-0a55cce4bd00/dall-e-2-pre-training-mitigations.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,1024,1024&w=2880&h=2880"
                    text="DALL·E 2 pre-training mitigations"
                    date="Jun 28, 2022" />
            </Grid>

            <Grid mt="4rem" borderTop={"2px solid white"} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]} p={"1.5rem"}>
                <Heading fontSize={"3rem"}>Products</Heading>
                <Box>
                    <Text fontSize={"1.6rem"}>
                        Our API platform offers our latest models and guides for safety best practices.
                    </Text>
                    <Link>Explore our products</Link>
                </Box>
            </Grid>
         

            <Grid  p="1rem" gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]} gap="1rem">
                <ImageCard url="https://openaicom.imgix.net/ced1351b-4ddb-4484-8646-da8bc571fd30/new-and-improved-embeddings-api.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2048,2048&w=3840&h=3840"
                    text="New and improved embedding model"
                    date="Dec 15, 2022" />

                <ImageCard url="https://openaicom.imgix.net/5f1ce4c2-c06b-4d4d-828a-e90c89680db4/dall-e-now-available-without-waitlist.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,1024,1024&w=3840&h=3840"
                    text="DALL·E now available without waitlist"
                    date="Sep 28, 2022" />

                <ImageCard url="https://openaicom.imgix.net/5772930c-1b4d-40cf-b9aa-770aa5a08e72/new-and-improved-content-moderation-tooling.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2048,2048&w=3840&h=3840"
                    text="New and improved content moderation tooling"
                    date="August 10, 2022" />

                <ImageCard url="https://openaicom.imgix.net/d0a85fe2-47d9-4903-9304-11953c9e6462/gpt-3-edit-insert.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2048,2048&w=3840&h=3840"
                    text="New GPT-3 capabilities: Edit & insert"
                    date="   Mar 15, 2022"
                />
            </Grid>

            
            <Grid mt="4rem" borderTop={"2px solid white"} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]} p={"1.5rem"}>
                <Heading fontSize={"3rem"}>Careers at OpenAI</Heading>
                <Box>
                    <Text fontSize={"1.6rem"}>
                        Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.
                    </Text>
                    <Link>Views careers</Link>
                </Box>
            </Grid>
            <Box mt="2rem">
                <Image src={careers_image} />
            </Box>
        </>
    )
}

export default Header