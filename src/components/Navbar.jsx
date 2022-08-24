import { SearchIcon } from '@chakra-ui/icons';
import {Flex, Spacer,Box,Text, Button, Icon, Tooltip, Popover,PopoverArrow,PopoverTrigger,PopoverBody,PopoverCloseButton,PopoverContent,PopoverHeader, Image} from '@chakra-ui/react';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {BiShoppingBag} from 'react-icons/bi';
import {VscLocation} from 'react-icons/vsc';
import { useState, useRef, useEffect } from 'react';
import { SkinCare } from './NavComponents/SkinCare';
import { Makeup } from './NavComponents/Makeup';
import { Hair } from './NavComponents/Hair';
import { BathAndBody } from './NavComponents/BathAndBody';
import { Fragrance } from './NavComponents/Fragrance';
import { ToolsAndAccessories } from './NavComponents/ToolsAndAccessories';
import { HomeAndLifestyle } from './NavComponents/HomeAndLifestyle';
import { SunCare } from './NavComponents/SunCare';
import { Men } from './NavComponents/Men';
import { Gifts } from './NavComponents/Gifts';
import { BestSeller } from './NavComponents/BestSeller';
import { Wellness } from './NavComponents/Wellness';
import { FreeGifts } from './NavComponents/FreeGifts';

export const Navbar = () => {
    const [count,setCount] = useState(1);
    const [showLogo,setShowLogo] = useState(false);
    const myRef = useRef();
    
    window.onscroll = () => {
        myRef.current.offsetTop>87?setShowLogo(true):setShowLogo(false);
    }
    return <>
    <Flex>
       <Button leftIcon={<Icon as={VscLocation} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>STORE & SPA LOCATOR</Button>
       <Spacer/>
       <Flex>
           <Tooltip label='Wishlist'>
              <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>WISHLIST</Button>
           </Tooltip>
           <Tooltip label='Search'>
              <Button leftIcon={<SearchIcon boxSize='20px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>SEARCH</Button>
           </Tooltip>
           <Tooltip label='Account'>
              <Button leftIcon={<Icon as={CgProfile} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>SIGN IN/UP</Button>
           </Tooltip>
           <Tooltip label='Bag'>
              <Button leftIcon={<Icon as={BiShoppingBag} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'>BAG</Button>
           </Tooltip>
       </Flex>
    </Flex>

    <Flex mt='0'>
        <Spacer/>
        <img width='200px' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt=''/>
        <Spacer/>
    </Flex>
    <Flex ref={myRef} justifyContent={showLogo?'space-between':'center'} gap={5} mt='10px' position='sticky' top='0px' bg='white' alignItems='center' p='5px'>
        <Box width='150px' display={showLogo?'block':'none'}>
            <Image width='100%' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182' alt=''/>
        </Box>
        <Flex justifyContent='center' gap={showLogo?5:9}  alignItems='center'>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='500'>SHOP</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody>
                    <Flex my='15px'>
                       <Flex direction='column' textAlign='left' gap='10px' w='28%' borderRight='1px solid #12284c' boxSizing='border-box' pl='10%' >
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='o.5px' borderRadius='0px' variant='ghost' color={count===1?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===1?'500':'400'} onMouseEnter={()=>setCount(1)}>SKIN CARE</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===2?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===2?'500':'400'} onMouseEnter={()=>setCount(2)}>MAKEUP</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===3?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===3?'500':'400'} onMouseEnter={()=>setCount(3)}>HAIR</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===4?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===4?'500':'400'} onMouseEnter={()=>setCount(4)}>BATH & BODY</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===5?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===5?'500':'400'} onMouseEnter={()=>setCount(5)}>FRAGRANCE</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===6?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===6?'500':'400'} onMouseEnter={()=>setCount(6)}>TOOLS & ACCESSORIES</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===7?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===7?'500':'400'} onMouseEnter={()=>setCount(7)}>HOME & LIFESTYLE</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===8?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===8?'500':'400'} onMouseEnter={()=>setCount(8)}>SUN CARE</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===9?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===9?'500':'400'} onMouseEnter={()=>setCount(9)}>MEN</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===10?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===10?'500':'400'} onMouseEnter={()=>setCount(10)}>GIFTS</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===11?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===11?'500':'400'} onMouseEnter={()=>setCount(11)}>BEST SELLER</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===12?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===12?'500':'400'} onMouseEnter={()=>setCount(12)}>WELLNESS</Text>
                            <Text _hover={{color:"#12284c",fontWeight:"500"}} cursor='pointer' letterSpacing='0.5px' borderRadius='0px' variant='ghost' color={count===13?'#12284c':'#51617c'} fontSize='16px' fontWeight={count===13?'500':'400'} onMouseEnter={()=>setCount(13)}>FREE GIFTS!</Text>
                       </Flex> 
                       <Flex w='70%' justifyContent='space-evenly'>
                       {count===1?<SkinCare/>:count===2?<Makeup/>:count===3?<Hair/>:count===4?<BathAndBody/>:count===5?
                       <Fragrance/>:count===6?<ToolsAndAccessories/>:count===7?<HomeAndLifestyle/>:count===8?<SunCare/>:
                       count===9?<Men/>:count===10?<Gifts/>:count===11?<BestSeller/>:count===12?<Wellness/>:<FreeGifts/>}
                       </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>NEW!</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody>
                    <Flex my='15px' justifyContent='center' gap='4%'>
                        <Flex direction='column' gap='3px' fontSize='16.5px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                            <Text color='#12284c' cursor='pointer'>Shop All</Text>
                            <Text color='#12284c' cursor='pointer'>Skincare</Text>
                            <Text color='#12284c' cursor='pointer'>Makeup</Text>
                            <Text color='#12284c' cursor='pointer'>Hair</Text>
                            <Text color='#12284c' cursor='pointer'>Bath & Body</Text>
                            <Text color='#12284c' cursor='pointer'>Fragrance</Text>
                            <Text color='#12284c' cursor='pointer'>Tools & Accessories</Text>
                            <Text color='#12284c' cursor='pointer'>Wellness</Text>
                            <Text color='#12284c' cursor='pointer'>Gifts</Text>
                            <Text color='#12284c' cursor='pointer'>Wedding Essentials</Text>
                        </Flex>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528' alt='Blue Mercury'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New Brand Alert: ZitSticka</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Treat and prevent all kinds of breakouts</Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/summer_spectacular_navigation_303x303.jpg?v=1658775534' alt='Blue Mercury'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>The Summer Beauty Spectacular</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>$780+ worth of must-haves for less than $400!</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>BRANDS</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody maxWidth='100vw'>
                    <Flex my='15px' justifyContent='center' gap='3%'>
                        <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>SHOP ALL BRANDS</Text>
                        <Flex direction='column' gap='2px' fontSize='16.5px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BEST SELLERS</Text>
                            <Text color='#12284c' cursor='pointer'>Augustinus Bader</Text>
                            <Text color='#12284c' cursor='pointer'>Chantecaille</Text>
                            <Text color='#12284c' cursor='pointer'>diptyque</Text>
                            <Text color='#12284c' cursor='pointer'>Dr. Barbara Sturm</Text>
                            <Text color='#12284c' cursor='pointer'>Dyson</Text>
                            <Text color='#12284c' cursor='pointer'>La Mer</Text>
                            <Text color='#12284c' cursor='pointer'>Lune + Aster</Text>
                            <Text color='#12284c' cursor='pointer'>M-61</Text>
                            <Text color='#12284c' cursor='pointer'>NARS</Text>
                            <Text color='#12284c' cursor='pointer'>Olaplex</Text>
                            <Text color='#12284c' cursor='pointer'>Oribe</Text>
                            <Text color='#12284c' cursor='pointer'>SkinCeuticals</Text>
                            <Text color='#12284c' cursor='pointer'>Supergoop!</Text>
                            <Text color='#12284c' cursor='pointer'>TOM FORD</Text>
                            <Text color='#12284c' cursor='pointer'>Trish McEvoy</Text>
                            <Text color='#12284c' cursor='pointer' letterSpacing='1px' >VIRTUE</Text>
                        </Flex>
                        <Flex direction='column' gap='2px' fontSize='16.5px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>#NEWATBLUE</Text>
                            <Text color='#12284c' cursor='pointer'>BalmLabs</Text>
                            <Text color='#12284c' cursor='pointer'>Boucleme</Text>
                            <Text color='#12284c' cursor='pointer'>EltaMD</Text>
                            <Text color='#12284c' cursor='pointer'>Holy Curls</Text>
                            <Text color='#12284c' cursor='pointer'>L'AVANT</Text>
                            <Text color='#12284c' cursor='pointer'>Lake & Skye</Text>
                            <Text color='#12284c' cursor='pointer'>PCA Skin</Text>
                            <Text color='#12284c' cursor='pointer'>Sana Jardin</Text>
                            <Text color='#12284c' cursor='pointer'>Sisley-Paris</Text>
                            <Text color='#12284c' cursor='pointer'>Solawave</Text>
                            <Text color='#12284c' cursor='pointer'>Sunday II Sunday</Text>
                            <Text color='#12284c' cursor='pointer'>The Maker</Text>
                            <Text color='#12284c' cursor='pointer'>VARDIS</Text>
                            <Text color='#12284c' cursor='pointer'>ZitSticka</Text>
                        </Flex>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190' alt='Blue Mercury'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New to Buemercury: EltaMD</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Shop the cult-favorite sunscreen brand!</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>EXPLORE</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
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
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149' alt='Blue Mercury'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Wedding Season Essentials</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Must-have products for the bridal party and guests!</Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615' alt='Blue Mercury'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Routine Reboot</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Explore all beauty routines</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>EVENTS</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody>
                    <Flex my='15px' gap={35} justifyContent='center'>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087' alt='Blue mercury Masterclass'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Bluemercury Presents: #Masterclass</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Join us for live virtual shopping events! </Text>
                        </Box>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426' alt='Blue Events'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Complimentary Consultations!</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Book your one-on-one appointment at your local store</Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>BLUEREWARDS</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody>
                    <Flex my='15px' justifyContent='center' gap={20}>
                        <Flex direction='column' gap='5px' fontSize='18px'>
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>MY ACCOUNT</Text>
                            <Text color='#12284c' cursor='pointer'>Account Overview</Text>
                            <Text color='#12284c' cursor='pointer'>My Purchases</Text>
                            <Text color='#12284c' cursor='pointer'>My BlueRewards</Text>
                            <Text color='#12284c' cursor='pointer'>My Wishlist</Text>
                            <Text color='#12284c' cursor='pointer'>Details + Preferences</Text>
                        </Flex>
                        <Box cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372' alt='Blue Rewards'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Earn $10 for every $250</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Free to Join! Learn More &gt; </Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Button _hover={{borderBottom:"2px solid black",color:"#12284c",fontWeight:"500"}} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'>ROUTINE REBOOT</Button>
            </PopoverTrigger>
            <PopoverContent w='100vw'>
                <PopoverBody >
                    <Flex justifyContent='center' my='15px'>
                        <Box pr='35px' cursor='pointer'>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615' alt='Routine Reboot'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Shop All Routines</Text>
                        </Box>
                        <Box cursor='pointer' >
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/extend_your_summer_glow_2_303x303.jpg?v=1659102162' alt='Routine Reboot'/>
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>The "Extend Your Summer Glow" Routine</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Ward off dullness and boost your glow from head to toe</Text>
                        </Box>
                        <Flex direction='column' gap='5px' fontSize='17px' >
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY ROUTINE</Text>
                            <Text color='#12284c' cursor='pointer'>Shop All</Text>
                            <Text color='#12284c' cursor='pointer'>Back To School</Text>
                            <Text color='#12284c' cursor='pointer'>Extend Your Summer Glow</Text>
                            <Text color='#12284c' cursor='pointer'>Get Rid of Summer Sun Damage</Text>
                            <Text color='#12284c' cursor='pointer'>Hydration Head-to-Toe</Text>
                            <Text color='#12284c' cursor='pointer'>#IWokeUpLikeThis</Text>
                            <Text color='#12284c' cursor='pointer'>Out The Door in Five</Text>
                        </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
        </Flex>
        <Flex display={showLogo?'block':'none'}>
           <Tooltip label='Wishlist'>
              <Button leftIcon={<Icon as={AiOutlineHeart} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
           </Tooltip>
           <Tooltip label='Search'>
              <Button leftIcon={<SearchIcon boxSize='20px' />} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
           </Tooltip>
           <Tooltip label='Account'>
              <Button leftIcon={<Icon as={CgProfile} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
           </Tooltip>
           <Tooltip label='Bag'>
              <Button leftIcon={<Icon as={BiShoppingBag} boxSize='25px'/>} letterSpacing='1px' color='#12284c' fontSize="12px" variant='ghost' _hover='white'></Button>
           </Tooltip>
       </Flex>
    </Flex>
    </>
}