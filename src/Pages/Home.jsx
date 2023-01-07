import { Box } from '@chakra-ui/react'
import React from 'react'
import { BestSellers } from '../Components/BestSellers'
import { Features } from '../Components/Features/Features'
import { MainCarousel } from '../Components/MainCarousel/MainCarousel'
import { Navbar } from '../Components/Navbar/Navbar'
import { NewArrivals } from '../Components/NewArrivals'
import { NewProductNest } from '../Components/NewProductNest'
import { OffersText } from '../Components/OffersText'

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Features />
            <OffersText />
            <MainCarousel />
            <NewArrivals />
            <NewProductNest />
            <BestSellers />
        </Box>
    )
}

export default Home
