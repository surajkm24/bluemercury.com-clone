import { Box, Button, Heading, Input, Text } from "@chakra-ui/react"

export const Login = () => {
    return <>
        <Box w={['280px','460px']} m='auto'>
            <Heading color='#12284c' letterSpacing='2px' fontSize='37px' fontWeight='400' textAlign='center'>LOGIN</Heading>
            <Text textAlign='center' color='#12284c' mt='20px' fontSize='19px' fontWeight='300'>Please enter your e-mail and password.</Text>
            <Box border='1px solid black' mt='20px' p='7px 14px' _hover={{borderColor:"blue"}}>
            <Input variant='unstyled' placeholder='Email' borderRadius='0px' />
            </Box>
            <Box mt='15px' p=' 7px 14px' display='flex' border='1px solid black' _hover={{borderColor:"blue"}}>
                <Input placeholder='Password' variant='unstyled' type='password' borderRadius='0px'  />
                <Text cursor='pointer' textDecoration='underline' fontSize='14px' whiteSpace='nowrap' color='gray'>Forgot Password?</Text>
            </Box>
            <Input type='submit' value='LOGIN' bg='#12284c' color='white' borderRadius='0px' mt='15px' border='1px solid #12284c' fontWeight='500' cursor='pointer'/>
            <Box display='flex' justifyContent='center' mt='20px'>
                <Text fontSize='14px' color='#12284c' fontWeight='400'>Don't have an account? &nbsp;</Text>
                <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c' fontWeight='500'>Create one</Text>
            </Box>
        </Box>
    </>
}