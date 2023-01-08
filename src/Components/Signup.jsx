import { Box, Heading, Input, Select, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import { signupUser } from "../Services/auth.services";

export const Signup = () => {
    const [showBM, SetShowBM] = useState(false);
    const [formData, setFormData] = useState({
        email: "", fName: "", lName: "", password: "", birthMonth: ""
    })
    const { setIsAuth, isAuth } = useAuth();
    const toast = useToast();

    const handleChange = (event) => {
        let { value, name } = event.target;
        value = value.trim();
        console.log(name, value)
        setFormData({ ...formData, [name]: value })
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        signupUser(formData, toast, setIsAuth)
    }

    useEffect(() => {
        document.querySelector('title').innerText = 'Create Account - bluemercury'
    }, []);

    if (isAuth.loggedin) {
        return <Navigate to='/' />
    }
    return (
        <Box textAlign='center' w={['280px', '460px']} m='auto' mt='30px' mb='30px'>
            <Heading color='#12284c' letterSpacing='2px' fontSize='37px' fontWeight='400'
                textAlign='center'>
                CREATE ACCOUNT
            </Heading>
            <Text textAlign='center' color='#12284c' mt='20px' fontSize='19px' fontWeight='300'>
                Complete the form below to create a bluemercury.com account.
            </Text>
            <form onSubmit={handleSignup}>
                <Box border='1px solid black' mt='20px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='email' placeholder='Email*'
                        value={formData.email} borderRadius='0px' required onChange={handleChange} name='email' />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='text' placeholder='First Name*'
                        name='fName' value={formData.fName} borderRadius='0px' required
                        onChange={handleChange} />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='text' placeholder='Last Name*'
                        name='lName' value={formData.lName}
                        borderRadius='0px' required onChange={handleChange} />
                </Box>
                <Box border='1px solid black' mt='15px' p='8px 15px' _hover={{ borderColor: "blue" }}>
                    <Input color='gray' variant='unstyled' type='password' minLength={8}
                        name='password' value={formData.password}
                        placeholder='Password*' borderRadius='0px' required onChange={handleChange} />
                </Box>
                <Select display={showBM ? 'block' : "none"} variant='outline' borderRadius='0px'
                    borderColor='black' mt='15px' placeholder='Birthday Month' color='gray'
                    name='birthMonth' value={formData.birthMonth} onChange={handleChange}>
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
                <Text textAlign='right' color='#12284c' fontWeight='300' fontSize='12px'
                    mt='15px'>*Indicates Required Field</Text>
                <Box bg='#d1e8ee' p='10px' mt='20px' display='flex' alignItems='flex-start' gap='10px'>
                    <input style={{ cursor: "pointer" }} type='checkbox'
                        onChange={() => SetShowBM(prev => !prev)} />
                    <Box color='#475d79' textAlign='left'>
                        <Text display='flex' mt='-6px' fontSize='18px' letterSpacing='1px'>
                            <p style={{ fontFamily: "Quickbrush,cursive", fontStyle: "italic" }}>
                                join &nbsp;</p>BLUEREWARDS</Text>
                        <Text>
                            Earn $10 for every $250 you spend, plus FREE birthday gifts & treatments!
                        </Text>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' mt='20px'>
                    <Text fontSize='14px' color='#12284c' fontWeight='400'>
                        By continuing, you agree to Bluemercury's &nbsp;
                    </Text>
                    <Link to='#'>
                        <Text cursor='pointer' textDecoration='underline' fontSize='14px'
                            color='#12284c' fontWeight='500'>
                            Privacy Practices
                        </Text>
                    </Link>
                </Box>
                <Input type='submit' w='250px' value='CREATE ACCOUNT' bg='#12284c' color='white'
                    borderRadius='0px' mt='15px' border='1px solid #12284c' fontWeight='500'
                    cursor='pointer' />
            </form>
            <Box display='flex' justifyContent='center' mt='20px'>
                <Text fontSize='14px' color='#12284c' fontWeight='400'>
                    Already have a bluemercury.com account? &nbsp;
                </Text>
                <Link to='/account/login'>
                    <Text cursor='pointer' textDecoration='underline' fontSize='14px' color='#12284c'
                        fontWeight='500'>
                        Sign In
                    </Text>
                </Link>
            </Box>
        </Box>
    )
}