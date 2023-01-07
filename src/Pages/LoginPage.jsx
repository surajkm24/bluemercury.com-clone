import React from 'react'
import { Box } from '@chakra-ui/react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Features } from '../Components/Features/Features';
import { OffersText } from '../Components/OffersText';
import { Footer } from '../Components/Footer/Footer';
import { Login } from '../Components/Login';

const LoginPage = () => {
    return (
        <Box>
            <Navbar />
            <Features />
            <OffersText />
            <Login />
            <Footer />
        </Box>
    )
}

export default LoginPage