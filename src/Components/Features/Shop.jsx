import { Popover, PopoverTrigger, Text, PopoverContent, PopoverBody, Flex, } from '@chakra-ui/react';
import { SkinCare } from './SkinCare';
import { Makeup } from './Makeup';
import { Hair } from './Hair';
import { BathAndBody } from './BathAndBody';
import { Fragrance } from './Fragrance';
import { ToolsAndAccessories } from './ToolsAndAccessories';
import { HomeAndLifestyle } from './HomeAndLifestyle';
import { SunCare } from './SunCare';
import { Men } from './Men';
import { Gifts } from './Gifts';
import { BestSeller } from './BestSeller';
import { Wellness } from './Wellness';
import { FreeGifts } from './FreeGifts';
import { featuresHeader } from '../../data/featuresData';

export const Shop = ({ count, setCount, showLogo }) => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "500" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='500' 
                borderBottom='2px solid white' width={showLogo ? 'fit-content' : null}>
                    SHOP
                </Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody>
                    <Flex my='15px'>
                        <Flex direction='column' textAlign='left' gap='10px' w='28%' borderRight='1px solid #12284c' boxSizing='border-box' pl='10%' >
                            {featuresHeader.map((ele, i) => (
                                <Text _hover={{ color: "#12284c", fontWeight: "500" }} cursor='pointer'
                                    letterSpacing='0.5px' borderRadius='0px' variant='ghost'
                                    color={count === (i + 1) ? '#12284c' : '#51617c'} fontSize='16px'
                                    fontWeight={count === (i + 1) ? '500' : '400'}
                                    onMouseEnter={() => setCount(i + 1)} key={i + 1}>
                                    {ele}
                                </Text>
                            ))}
                        </Flex>
                        <Flex w='70%' justifyContent='space-evenly'>
                            {count === 1 ? <SkinCare /> : count === 2 ? <Makeup /> : count === 3 ? <Hair /> : count === 4 ? <BathAndBody /> : count === 5 ?
                                <Fragrance /> : count === 6 ? <ToolsAndAccessories /> : count === 7 ? <HomeAndLifestyle /> : count === 8 ? <SunCare /> :
                                    count === 9 ? <Men /> : count === 10 ? <Gifts /> : count === 11 ? <BestSeller /> : count === 12 ? <Wellness /> : <FreeGifts />}
                        </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}