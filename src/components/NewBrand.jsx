import { Flex, Box, Image, Heading, Text, Show, Hide } from "@chakra-ui/react"

export const NewBrand = () => {

    return <>
        <Show above='768px'>
            <Flex justifyContent={'space-between'} px='3%' mt='20px' mb='50px' alignItems='center'>
                <Box width='48%'>
                    <Image width='100%' height='37vw' objectFit={'cover'} src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_coop_x650.jpg?v=1660762100' alt='' />
                </Box>
                <Box width='48%' height='100%' >
                    <Text width='fit-content' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='16px' >NEW BRAND ALERT!</Text>
                    <Heading textAlign='left' fontSize='25px' color='#12284C' fontWeight={450} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>ZitSticka</Heading>
                    <Text color='#12284C' fontSize='18px' mt='15px' fontWeight='300' pr='25%'>Offering a full suite of acne products that can treat and prevent all kinds of breakouts, while protecting and nourishing your skin.</Text>
                    <Text width='fit-content' mt='15px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>SHOP NOW</Text>
                </Box>
            </Flex>
        </Show>
        <Hide above='768px'>
            <Box width='100%' mt='-15px'>
                <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_coop_x650.jpg?v=1660762100' alt='' />
            </Box>
            <Box textAlign='center' mt='20px'>
                <Text width='fit-content' m='auto' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='16px' >NEW BRAND ALERT!</Text>
                <Heading textAlign='center' fontSize='25px' color='#12284C' fontWeight={450} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>ZitSticka</Heading>
                <Text color='#12284C' fontSize='17px' mt='15px' fontWeight='300' px='15%'>Offering a full suite of acne products that can treat and prevent all kinds of breakouts, while protecting and nourishing your skin.</Text>
                <Text width='fit-content' m='auto' mt='15px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>SHOP NOW</Text>
            </Box>
        </Hide>
    </>
}

