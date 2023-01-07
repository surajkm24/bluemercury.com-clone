import { Box, Flex, Text, Input, Icon, Show, Hide, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react';
import { useState } from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react'
import { SubscribeEmail } from "./SubscribeEmail";
import { FooterMain } from "./FooterMain";

export const Footer = () => {

    return <>
        <Flex mt='60px' pt={{ base: "0px", lg: '30px' }} borderTop='1px solid lightgray'
            pb={{ base: "20px", lg: '50px' }}
            justifyContent='space-between' gap={{lg:'30px'}} px={{ base: "0px", lg: '3vw' }}
            flexDir={{ base: "column", lg: "row" }}>
            <SubscribeEmail />
            <FooterMain />
        </Flex>
    </>
}