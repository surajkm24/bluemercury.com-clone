import { Box } from '@chakra-ui/react'
import React from 'react'
import { Features } from '../Components/Features/Features'
import { Navbar } from '../Components/Navbar/Navbar'
import { OffersText } from '../Components/OffersText'

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Features />
            <OffersText />
        </Box>
    )
}

export default Home
