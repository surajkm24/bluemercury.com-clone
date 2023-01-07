import { Box, Text } from '@chakra-ui/react';
import { blueMercury, customerService, myAccount, resources } from '../../data/footerData';

export const OptionsList = () => {
    return (
        <>
            <Box lineHeight='30px'>
                <Text fontSize='16px' color='#466788' fontWeight='400'>BLUEMERCURY</Text>
                {blueMercury.map((ele,i) => (
                    <Text fontSize='14px' color='#466788' fontWeight='300' key={i + 1} cursor='pointer'>
                        {ele}
                    </Text>
                ))}
            </Box>
            <Box lineHeight='30px'>
                <Text fontSize='16px' color='#466788' fontWeight='400'>MY ACCOUNT</Text>
                {myAccount.map((ele,i) => (
                    <Text fontSize='14px' color='#466788' fontWeight='300' key={i + 1} cursor='pointer'>
                        {ele}
                    </Text>
                ))}
            </Box>
            <Box lineHeight='30px'>
                <Text fontSize='16px' color='#466788' fontWeight='400'>CUSTOMER SERVICES</Text>
                {customerService.map((ele,i) => (
                    <Text fontSize='14px' color='#466788' fontWeight='300' key={i + 1} cursor='pointer'>
                        {ele}
                    </Text>
                ))}
            </Box>
            <Box lineHeight='30px'>
                <Text fontSize='16px' color='#466788' fontWeight='400'>RESOURCES</Text>
                {resources.map((ele,i) => (
                    <Text fontSize='14px' color='#466788' fontWeight='300' key={i + 1} cursor='pointer'>
                        {ele}
                    </Text>
                ))}
            </Box>
        </>
    )
}