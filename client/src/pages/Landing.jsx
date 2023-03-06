import React from 'react'
import Navigation from '../components/Navigation'
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';

const Landing = () => {
    return (
        <Box bg="#242424" color={"rgba(255, 255, 255, 0.87)"}>
            <Navigation />
            <Header />
        </Box>
    )
}

export default Landing