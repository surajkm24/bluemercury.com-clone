import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react'

export const Signup = () => {
    const [showBM, SetShowBM] = useState(false);
    const [formData, setFormData] = useState({ email: "", fName: "", lName: "", password: "", birthMonth: "" })
    const navigate = useNavigate();
    useEffect(() => {
        (document.querySelector('title').innerText = 'Create Account - bluemercury')
    }, []);
    const [alert, setAlert] = useState(false);
    const [success,setSuccess] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        let usersRes = await fetch("https://fierce-springs-42166.herokuapp.com/bluemercury.com-users");
        let usersData = await usersRes.json();
        let uniqData = usersData.filter(item => item.email === formData.email);
        if (uniqData.length > 0) {
            setAlert(true);
            setTimeout(()=>{
                setAlert(false)
            },4000)
            return;
        }
        let res = await fetch('https://fierce-springs-42166.herokuapp.com/bluemercury.com-users', {
            method: 'POST',
            body: JSON.stringify({ ...formData, userToken: formData.fName + Date.now() + formData.lName, id: Date.now() }),
            headers: { "Content-Type": "application/json" }
        })
        res = await res.json();
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            navigate('/account/login');
        },4000)
    }
    return <>
        <Slide in={alert} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='error'  w='80vw' mx='10vw' mt='50px' flexWrap='wrap'>
                <AlertIcon />
                <AlertTitle>User already exists!</AlertTitle>
                <AlertDescription>Try logging in.</AlertDescription>
            </Alert>
        </Slide>
        <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success'  w='80vw' mx='10vw' mt='50px' flexWrap='wrap'>
                <AlertIcon />
                <AlertTitle>Account Created Succesfully!</AlertTitle>
                <AlertDescription>Redirecting to login page</AlertDescription>
            </Alert>
        </Slide>
        <Box textAlign='center' w={['280px', '460px']} m='auto' mt='30px' mb='30px'>
            <Heading color='#12284c' letterSpacing='2px' fontSize='37px' fontWeight='400' textAlign='center'>CREATE ACCOUNT</Heading>
            <Text textAlign='center' color='#12284c' mt='20px' fontSize='19px' fontWeight='300'>Complete the form below to create a bluemercury.com account.</Text>
            <form onSubmit={handleSignup}>
                <Box border='1px solid black' mt='20px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='email' placeholder='Email*' borderRadius='0px' required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='text' placeholder='First Name*' borderRadius='0px' required onChange={(e) => setFormData({ ...formData, fName: e.target.value })} />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='text' placeholder='Last Name*' borderRadius='0px' required onChange={(e) => setFormData({ ...formData, lName: e.target.value })} />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='password' minLength={8} placeholder='Password*' borderRadius='0px' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </Box>
                <Select display={showBM ? 'block' : "none"} variant='outline' borderRadius='0px' borderColor='black' mt='15px' placeholder='Birthday Month' color='gray' onChange={(e) => setFormData({ ...formData, birthMonth: e.target.value })}>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </Select>
                <Text textAlign='right' color='#12284c' fontWeight='300' fontSize='12px' mt='15px'>*Indicates Required Field</Text>
                <Box bg='#d1e8ee' p='10px' mt='20px' display='flex' alignItems='flex-start' gap='10px'>
                    <input style={{ cursor: "pointer" }} type='checkbox' onChange={() => SetShowBM(prev => !prev)} />
                    <Box color='#475d79' textAlign='left'>
                        <Text display='flex' mt='-6px' fontSize='18px' letterSpacing='1px'><p style={{ fontFamily: "Quickbrush,cursive", fontStyle: "italic" }}>join &nbsp;</p>BLUEREWARDS</Text>
                        <Text>Earn $10 for every $250 you spend, plus FREE birthday gifts & treatments!</Text>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' mt='20px'>
                    <Text fontSize='14px' color='#12284c' fontWeight='400'>By continuing, you agree to Bluemercury's &nbsp;</Text>
                    <Link to='#'>
                        <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c' fontWeight='500'>Privacy Practices</Text>
                    </Link>
                </Box>
                <Input type='submit' w='250px' value='CREATE ACCOUNT' bg='#12284c' color='white' borderRadius='0px' mt='15px' border='1px solid #12284c' fontWeight='500' cursor='pointer' />
            </form>
            <Box display='flex' justifyContent='center' mt='20px'>
                <Text fontSize='14px' color='#12284c' fontWeight='400'>Already have a bluemercury.com account? &nbsp;</Text>
                <Link to='/account/login'>
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c' fontWeight='500'>Sign In</Text>
                </Link>
            </Box>
        </Box>
    </>
}