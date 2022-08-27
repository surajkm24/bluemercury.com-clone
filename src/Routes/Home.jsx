import { HeaderCarousel } from '../components/HeaderCarousel';
import { NewArrivals } from '../components/NewArrivals';
import { GlowyMakeup } from '../components/GlowyMakeup';
import { BestSellers } from '../components/BestSellers';
import { NewProductNest } from '../components/NewProductNest';
import { TreatMentAndSerums } from '../components/TreatmentAndSerums';
import { NewBrand } from '../components/NewBrand';
import { OffersAndServices } from '../components/OffersAndServices';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { OffersText } from '../components/OffersText';

export const Home = () => {
    useEffect(()=>{
        (document.querySelector('title').innerText='Cosmetics, Skincare, Wellness and Spa | bluemercury')
    },[])
    return <>
        <Navbar/>
        <OffersText/>
        <HeaderCarousel />
        <NewArrivals />
        <NewProductNest />
        <BestSellers />
        <TreatMentAndSerums />
        <GlowyMakeup />
        <NewBrand />
        <OffersAndServices />
        <Footer/>
    </>
}