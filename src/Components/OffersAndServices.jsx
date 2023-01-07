import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react"
import { data } from '../data/offersAndServicesData.js';

export const OffersAndServices = () => {
    return (
        <Flex justifyContent={'space-between'} px={{ base: "0px", md: '5%' }} mt='60px'
            textAlign='center' flexDir={{ base: "column", md: "row" }} gap={{ base: "30px", md: "0px" }}>
            {data.map((ele) => (
                <Box width={{ base: "100%", md: '32%' }} key={ele.title}>
                    <Image cursor='pointer' src={ele.img} alt='' w='100%' />
                    <Heading cursor='pointer' textAlign='center' fontSize='14px' color='#12284C'
                        fontWeight={500} letterSpacing='1px' mt='12px'>
                        {ele.title}
                    </Heading>
                    <Text cursor='pointer' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'
                        px={{ base: "5%", md: "0px" }}>
                        {ele.content}
                    </Text>
                    <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px'
                        color='#12284C' fontWeight='500' fontSize='15px'
                        borderBottom='2px solid #12284C'>
                        {ele.closing}
                    </Text>
                </Box>
            ))}
        </Flex>
    )
}