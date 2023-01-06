import { Popover, PopoverTrigger, Text, PopoverContent, PopoverBody, Flex, Box } from '@chakra-ui/react';

export const Events = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >EVENTS</Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody>
                    <Flex my='15px' gap={35} justifyContent='center'>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087' alt='Blue mercury Masterclass' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Bluemercury Presents: #Masterclass</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Join us for live virtual shopping events! </Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426' alt='Blue Events' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Complimentary Consultations!</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Book your one-on-one appointment at your local store</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}