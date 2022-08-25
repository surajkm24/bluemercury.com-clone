import { Flex, Box, Image, Heading, Text, Show, Hide } from "@chakra-ui/react"
//https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537
//https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426
//https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315
export const OffersAndServices = () => {
    return <>
        <Show above='768px'>
            <Flex justifyContent={'space-between'} px='5%' mt='60px' textAlign='center'>
                <Box width='32%'>
                    <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537' alt='' />
                    <Heading cursor='pointer' textAlign='center' fontSize='14px' color='#12284C' fontStyle='bold' fontWeight={500} letterSpacing='1px' mt='12px'>FREE GIFTS WITH PURCHASE</Heading>
                    <Text cursor='pointer' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Stock up on all your favourite brands, then try something new on us.</Text>
                    <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>BROWSE NOW</Text>
                </Box>
                <Box width='32%'>
                    <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426' alt='' />
                    <Heading cursor='pointer' textAlign='center' fontSize='14px' color='#12284C' fontWeight={500} letterSpacing='1px' mt='12px'>COMPLIMENTARY IN-STORE CONSULTATIONS!</Heading>
                    <Text cursor='pointer' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Our Beauty Experts can show you quick makeup application tricksand how to revamp your skincare regimen.</Text>
                    <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>LEARN MORE</Text>
                </Box>
                <Box width='32%'>
                    <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315' alt='' />
                    <Heading cursor='pointer' textAlign='center' fontSize='14px' color='#12284C' fontWeight={500} letterSpacing='1px' mt='12px'>BLUEMERCURY SPA</Heading>
                    <Text cursor='pointer' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Our luxurious spa services are customizable to your individual needs.</Text>
                    <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>BROWSE THE MENU</Text>
                </Box>
            </Flex>
        </Show>
        <Hide above='768px'>
            <Box mt='60px' mb='15px'>
                <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537' alt='' />
                <Heading cursor='pointer' textAlign='center' fontSize='15px' color='#12284C' fontStyle='bold' fontWeight={500} letterSpacing='1px' mt='12px'>FREE GIFTS WITH PURCHASE</Heading>
                <Text cursor='pointer' px='5%' textAlign='center' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Stock up on all your favourite brands, then try something new on us.</Text>
                <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>BROWSE NOW</Text>
            </Box>
            <Box mb='15px'>
                <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426' alt='' />
                <Heading cursor='pointer' textAlign='center' fontSize='15px' color='#12284C' fontWeight={500} letterSpacing='1px' mt='12px'>COMPLIMENTARY IN-STORE CONSULTATIONS!</Heading>
                <Text cursor='pointer' px='5%' textAlign='center' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Our Beauty Experts can show you quick makeup application tricksand how to revamp your skincare regimen.</Text>
                <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>LEARN MORE</Text>
            </Box>
            <Box >
                <Image cursor='pointer' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315' alt='' />
                <Heading cursor='pointer' textAlign='center' fontSize='15px' color='#12284C' fontWeight={500} letterSpacing='1px' mt='12px'>BLUEMERCURY SPA</Heading>
                <Text cursor='pointer' px='5%' textAlign='center' color='#12284C' fontSize='17px' mt='10px' fontWeight='300'>Our luxurious spa services are customizable to your individual needs.</Text>
                <Text cursor='pointer' width='fit-content' m='auto' mt='10px' letterSpacing='2px' color='#12284C' fontWeight='500' fontSize='15px' borderBottom='2px solid #12284C'>BROWSE THE MENU</Text>
            </Box>
        </Hide>
    </>
}