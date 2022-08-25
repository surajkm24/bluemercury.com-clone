import { Flex, Box, Image, Heading, Text, Show, Hide } from "@chakra-ui/react"

export const TreatMentAndSerums = () => {

    return <>
        <Show above='768px'>
            <Flex justifyContent={'space-between'} px='5%' mt='40px' mb='50px'>
                <Box width='48%'>
                    <Image src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/r_co_side_by_side_2_640x.jpg?v=1661281657' alt='' />
                    <Heading textAlign='left' fontSize='25px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>Triple Threat</Heading>
                    <Text color='#12284C' fontSize='18px' mt='10px' fontWeight='300'>Get touchable, texturized hair right out of the shower. The Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler from R+Co features plumping polymers that gently bond to your strands.</Text>
                    <Text width='fit-content' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='17px' borderBottom='2px solid #12284C'>SHOP NOW</Text>
                </Box>
                <Box width='48%'>
                    <Image src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/serums_side_by_side_640x.jpg?v=1661281128' alt='' />
                    <Heading textAlign='left' fontSize='25px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>Serums, Anyone?</Heading>
                    <Text color='#12284C' fontSize='18px' mt='10px' fontWeight='300'>A must-have step in any truly advanced skincare routine, serums deliver high doses of active ingredients to treat dark spots, dryness and so much more!</Text>
                    <Text width='fit-content' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='17px' borderBottom='2px solid #12284C'>SHOP TREATMENT & SERUMS</Text>
                </Box>
            </Flex>
        </Show>
        <Hide above='768px'>
            <Box px='2%' textAlign='center' mt='40px'>
                <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/r_co_side_by_side_2_640x.jpg?v=1661281657' alt='' />
                <Heading textAlign='center' fontSize='25px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>Triple Threat</Heading>
                <Text color='#12284C' fontSize='18px' mt='10px' fontWeight='300'>Get touchable, texturized hair right out of the shower. The Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler from R+Co features plumping polymers that gently bond to your strands.</Text>
                <Text  width='fit-content' m='auto' mt='10px' mb='20px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='17px' borderBottom='2px solid #12284C'>SHOP NOW</Text>
            </Box>
            <Box px='2%' textAlign='center' mb='60px'>
                <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/serums_side_by_side_640x.jpg?v=1661281128' alt='' />
                <Heading textAlign='center' fontSize='25px' color='#12284C' fontWeight={200} letterSpacing='2px' fontFamily='Montserrat Light,sans-serif' mt='12px'>Serums, Anyone?</Heading>
                <Text color='#12284C' fontSize='18px' mt='10px' fontWeight='300'>A must-have step in any truly advanced skincare routine, serums deliver high doses of active ingredients to treat dark spots, dryness and so much more!</Text>
                <Text width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='17px' borderBottom='2px solid #12284C'>SHOP TREATMENT & SERUMS</Text>
            </Box>
        </Hide>
    </>
}