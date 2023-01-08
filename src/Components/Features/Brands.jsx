import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Flex, Text, Box } from '@chakra-ui/react';
import { bestsellers, newatblue } from '../../data/featuresData';
import logo from '../../assets/features/brand.avif';

export const Brands = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >
                    BRANDS</Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody maxWidth='100vw'>
                    <Flex my='15px' justifyContent='center' gap='3%'>
                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>SHOP ALL BRANDS</Text>
                        <Flex direction='column' gap='2px' fontSize='16.5px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BEST SELLERS</Text>
                            {bestsellers.map((ele, i) => (
                                <Text color='#12284c' cursor='pointer' key={ele.title + i}>
                                    {ele.title}
                                </Text>
                            ))}
                        </Flex>
                        <Flex direction='column' gap='2px' fontSize='16.5px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>#NEWATBLUE</Text>
                            {newatblue.map((ele, i) => (
                                <Text color='#12284c' cursor='pointer' key={ele.title + i}>
                                    {ele.title}
                                </Text>
                            ))}
                        </Flex>
                        <Box cursor='pointer'>
                            <img src={logo} alt='Blue Mercury' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>
                                New to Buemercury: EltaMD
                            </Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>
                                Shop the cult-favorite sunscreen brand!
                            </Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}