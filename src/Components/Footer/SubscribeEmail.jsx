import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, Input, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';

export const SubscribeEmail = () => {
    const [email, setEmail] = useState('');
    const submitEmail = () => {

    }
    return (
        <Box bg={{ base: "#12284c", lg: "white" }} color={{ base: "white", lg: "black" }}
            p={{ base: "20px", lg: "0px" }}>
            <Text fontSize={{ base: "17px", lg: '16px' }} color={{ lg: '#466788' }}
                fontWeight={{ base: "500", lg: '400' }}>
                Get Expert Beauty Insight & Offers
            </Text>
            <Box display='flex' alignItems='center' borderBottom='1px' mt='15px'
                borderColor={{ base: "white", md: "black" }}>
                <Input placeholder='ENTER EMAIL' p='0px' outline='none' variant='unstyled' type='email'
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <ArrowForwardIcon boxSize='20px' cursor='pointer' onClick={submitEmail} />
            </Box>
            <Text fontSize='14px' color={{ lg: '#466788' }} cursor='pointer' fontWeight='300' mt='15px'
                display={{ base: "none", lg: "block" }}>
                By continuing, you agree to Bluemercury's
            </Text>
            <Text fontSize='14px' color={{ lg: '#466788' }} cursor='pointer' fontWeight='300'
                textDecoration='underline' display={{ base: "none", lg: "block" }}>
                Privacy Practices
            </Text>
            <Text fontSize='15px' display={{ base: 'flex', lg: "none" }} cursor='pointer' 
            fontWeight='300' mt='15px'>
                By continuing, you agree to Bluemercury's &nbsp;
                <Text fontSize='15px' cursor='pointer' fontWeight='300' textDecoration='underline'>
                    Privacy Practices
                </Text>
            </Text>
            <Flex alignItems='center' gap={{ base: "6vw", lg: '2vw' }}
                m={{ base: "50px 0px 0px", lg: "20px 0px" }}>
                <Icon cursor='pointer' as={FaTwitter} boxSize='25px' color={{ lg: '#12284c' }} />
                <Icon cursor='pointer' as={FaPinterestP} boxSize='23px' color={{ lg: '#12284c' }} />
                <Icon cursor='pointer' as={FaFacebookF} boxSize='21px' color={{ lg: '#12284c' }} />
                <Icon cursor='pointer' as={FaInstagram} boxSize='24px' color={{ lg: '#12284c' }} />
                <Icon cursor='pointer' as={FaYoutube} boxSize='27px' color={{ lg: '#12284c' }} />
            </Flex>
            <Text fontSize='12px' color='#466788' cursor='pointer' fontWeight='300'
                display={{ base: "none", lg: "block" }}>
                Copyright 2022 bluemercury. All Rights Reserved.
            </Text>
        </Box>
    )
}