import { Flex, Box, Image, Heading, Text, Show, Hide } from "@chakra-ui/react"
import { data } from '../data/treatmentAndSerumsData.js';

export const TreatMentAndSerums = () => {

    return (
        <Flex justifyContent={'space-between'} px={{ md: '5%' }} mt='40px' mb='50px'
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "30px", md: "none" }}>
            {data.map((ele) => (
                <Box cursor='pointer' textAlign={{ base: "center", md: "left" }}
                    w={{ base: "100%", md: "48%" }} key={ele.title}
                    px={{ base: "2%", md: "0px" }}>
                    <Image src={ele.img} alt={ele.title} w={"100%"} />
                    <Heading fontSize='25px' color='#12284C' fontWeight={200}
                        letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>
                        {ele.title}
                    </Heading>
                    <Text color='#12284C' fontSize='18px' mt='10px' fontWeight='300'>
                        {ele.content}
                    </Text>
                    <Text width='fit-content' mx={{ base: "auto", md: "none" }} mt='10px'
                        letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='17px' borderBottom='2px solid #12284C'>
                        {ele.closing}
                    </Text>
                </Box>
            ))}
        </Flex>
    )
}