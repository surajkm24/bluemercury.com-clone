import { Popover, PopoverBody, PopoverTrigger, PopoverContent, Box, Flex, Text } from '@chakra-ui/react';

export const Explore = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >
                    EXPLORE</Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody>
                    <Flex my='15px' justifyContent='center' gap={10}>
                        <Flex direction='column' gap='5px' fontSize='18px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>FEATURED</Text>
                            <Text color='#12284c' cursor='pointer'>Beauty Alfresco</Text>
                            <Text color='#12284c' cursor='pointer'>Wedding Essentials</Text>
                            <Text color='#12284c' cursor='pointer'>#ShowUsYourBag</Text>
                            <Text color='#12284c' cursor='pointer'>The Founders Series</Text>
                            <Text color='#12284c' cursor='pointer'>Blue Notes</Text>
                            <Text color='#12284c' cursor='pointer'>Buying Guides</Text>
                            <Text color='#12284c' cursor='pointer'>Conscious Beauty</Text>
                            <Text color='#12284c' cursor='pointer' letterSpacing='1px' >MORE</Text>
                        </Flex>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149' alt='Blue Mercury' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Wedding Season Essentials</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Must-have products for the bridal party and guests!</Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615' alt='Blue Mercury' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Routine Reboot</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Explore all beauty routines</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}