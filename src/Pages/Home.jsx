import { Box } from '@chakra-ui/react'
import React from 'react'
import { BestSellers } from '../Components/BestSellers'
import { Features } from '../Components/Features/Features'
import { Footer } from '../Components/Footer/Footer'
import { GlowyMakeup } from '../Components/GlowyMakeup'
import { MainCarousel } from '../Components/MainCarousel/MainCarousel'
import { Navbar } from '../Components/Navbar/Navbar'
import { NewArrivals } from '../Components/NewArrivals'
import { NewBrand } from '../Components/NewBrand'
import { NewProductNest } from '../Components/NewProductNest'
import { OffersAndServices } from '../Components/OffersAndServices'
import { OffersText } from '../Components/OffersText'
import { TreatMentAndSerums } from '../Components/TreatmentAndSerums'

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
            <TreatMentAndSerums />
            <GlowyMakeup />
            <NewBrand />
            <OffersAndServices />
            <Footer />
        </Box>
    )
}

export default Home
