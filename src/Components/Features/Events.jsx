import { Popover, PopoverTrigger, Text, PopoverContent, PopoverBody, Flex, Box } from '@chakra-ui/react';
import logo1 from '../../assets/features/events1.avif';
import logo2 from '../../assets/features/events2.avif';

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
                            <img src={logo1} alt='Blue mercury Masterclass' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Bluemercury Presents: #Masterclass</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Join us for live virtual shopping events! </Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src={logo2} alt='Blue Events' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Complimentary Consultations!</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Book your one-on-one appointment at your local store</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}