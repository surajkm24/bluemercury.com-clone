import { useEffect, useRef, useState } from "react";
import { Show, Hide } from '@chakra-ui/react';

// {{/* <img srcset="//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-mob_400x.jpg?v=1660596943 400w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-mob_600x.jpg?v=1660596943 600w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-mob_900x.jpg?v=1660596943 900w," alt=""/> */}
// {/* <img src="//cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-mob.jpg?v=1660082597&amp;width=900" alt="" srcset="//cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-mob.jpg?v=1660082597&amp;width=400 400w, //cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-mob.jpg?v=1660082597&amp;width=600 600w, //cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-mob.jpg?v=1660082597&amp;width=900 900w" width="900" height="1260" class="slide-image" sizes="100vw"> */}
// // <img class="slide-image" loading="lazy" srcset="//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-mob-2_400x.jpg?v=1659557535 400w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-mob-2_600x.jpg?v=1659557535 600w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-mob-2_900x.jpg?v=1659557535 900w," alt="">
// }

export const HeaderCarousel = () => {
    const [slide, setSlide] = useState(1);
    const slideRef = useRef(null);
    const clickSlide = () => {
        clearInterval(slideRef.current);
        slideRef.current = setInterval(() => {
            setSlide(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)
        }, 5000)
    }
    useEffect(()=>{
    if(slideRef.current!==null) return;    
    slideRef.current = setInterval(()=>{
       setSlide(prev=>prev===1?2:prev===2?3:1)
     },5000)
    },[])
    return (
        <div className='carousel' >
            <div className='carousel-item' style={{ cursor: "pointer", display: slide === 1 ? 'block' : 'none', width: "100vw", position: "relative" }}>
                <Show above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-des_1300x.jpg?v=1660082597 1300w' alt='' />
                    <div style={{ width: "35%", position: "absolute", top: "10%", left: "5%", textAlign: "center" }}>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.6vw", fontWeight: "300" }}>ROUTINE <b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.5vw" }}>REBOOT</b></p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.9vw", fontWeight: "300" }}>THE</p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "2vw", fontWeight: "550" }}>"EXTEND YOUR SUMMER GLOW"</p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.9vw", fontWeight: "300" }}>ROUTINE</p>
                        <p style={{ color: "#12284c", fontSize: "1.6vw", fontWeight: "300" }}>Proper pre-bed beauty prep will not only help you rest easy, but also simplify your AM routine. With just a few advance steps, you’ll hop out of bed looking bright-eyed, radiant and ready to go.</p>
                        <p style={{ marginTop: "2%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.2vw", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Show>
                <Hide above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/routines-extend-your-summer-glow-hero-mob.jpg?v=1660082597' />
                    <div style={{ width: "100%", position: "absolute", bottom: "15vw", textAlign: "center" }}>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "24px", fontWeight: "300" }}>ROUTINE <b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "23px" }}>REBOOT</b></p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "26px", fontWeight: "300" }}>THE</p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "29px", fontWeight: "550" }}>"EXTEND YOUR SUMMER GLOW"</p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "26px", fontWeight: "300" }}>ROUTINE</p>
                        <p style={{ color: "#12284c", fontSize: "17px", fontWeight: "300" }}>Proper pre-bed beauty prep will not only help you <br />rest easy, but also simplify your AM routine. With <br />just a few advance steps, you’ll hop out of bed <br />looking bright-eyed, radiant and ready to go.</p>
                        <p style={{ marginTop: "2%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "18px", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Hide>
            </div>
            <div className='carousel-item' style={{ cursor: "pointer", display: slide === 2 ? 'block' : 'none', width: "100vw", position: "relative" }}>
                <Show above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1300x.jpg?v=1660596941 1300w,//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-des_1600x.jpg?v=1660596941' alt='' />
                    <div style={{ width: "45%", position: "absolute", top: "10%", left: "10px", textAlign: "left" }}>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "3vw", fontWeight: "350" }}>DEW DROPS</p>
                        <p style={{ color: "#12284c", fontSize: "1.9vw", fontWeight: "300" }}>Check out our favorite new and bestselling serums, lotions and lightweight creams, all of which hydrate beautifully without feeling the least bit heavy on your skin.</p>
                        <p style={{ marginTop: "2%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.4vw", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Show>
                <Hide above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/lightweight-skincare-hp-hero-mob_400x.jpg?v=1660596943' />
                    <div style={{ width: "100%", position: "absolute", bottom: "15vw", textAlign: "center" }}>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "30px", fontWeight: "350" }}>DEW DROPS</p>
                        <p style={{ color: "#12284c", fontSize: "17px", fontWeight: "300" }}>Check out our favorite new and bestselling <br/>serums, lotions and lightweight creams, all of <br/>which hydrate beautifully without feeling the least <br/>bit heavy on your skin.</p>
                        <p style={{ marginTop: "2%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "18px", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Hide>
            </div>
            <div className='carousel-item' style={{ cursor: "pointer", display: slide === 3 ? 'block' : 'none', width: "100vw", position: "relative" }}>
                <Show above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-des_1300x.jpg?v=1659557146 1300w' alt='' />
                    <div style={{ width: "35%", position: "absolute", top: "10%", left: "10px", textAlign: "left" }}>
                        <p style={{ marginBottom: "-10px" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.8vw", fontWeight: "400" }}>LUNE + ASTER</b></p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "3vw", fontWeight: "350" }}>Dusk + Shadows</p>
                        <p style={{ color: "#12284c", fontSize: "1.9vw", fontWeight: "350", lineHeight: "2vw" }}>This new pallete features five universal, sunset inspired shades in matte and shimmer finishes, so you can create easily an alluring eye look!</p>
                        <p style={{ marginTop: "4%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "1.4vw", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Show>
                <Hide above='768px'>
                    <img width='100%' src='//cdn.shopify.com/s/files/1/0283/0185/2747/files/lune-aster-sunset-eyeshadow-hero-mob-2_400x.jpg?v=1659557535' alt='' />
                    <div style={{ width: "100%", position: "absolute", bottom: "15vw", textAlign: "center" }}>
                        <p style={{ marginBottom: "-10px" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "22px", fontWeight: "500" }}>LUNE + ASTER</b></p>
                        <p style={{ color: "#12284c", letterSpacing: "1px", fontSize: "30px", fontWeight: "350" }}>Dusk + Shadows</p>
                        <p style={{ color: "#12284c", fontSize: "19px", fontWeight: "350" }}>This new pallete features five universal, sunset- <br/>inspired shades in matte and shimmer finishes, so <br/>you can create easily an alluring eye look!</p>
                        <p style={{ marginTop: "2%" }}><b style={{ color: "#12284c", letterSpacing: "1px", fontSize: "18px", textDecoration: 'underline', textDecorationColor: "#12284c" }}>SHOP NOW</b></p>
                    </div>
                </Hide>
            </div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "20px 0px 0px 0px" }}>
                <div onClick={() => {
                    setSlide(1)
                    clickSlide()
                }} style={{ background: slide === 1 ? 'black' : 'white', border: "1px solid black", borderRadius: "50%", height: "11px", width: "11px", cursor: "pointer" }}></div>
                <div onClick={() => {
                    setSlide(2)
                    clickSlide()
                }} style={{ background: slide === 2 ? 'black' : 'white', border: "1px solid black", borderRadius: "50%", height: "11px", width: "11px", cursor: "pointer" }}></div>
                <div onClick={() => {
                    setSlide(3)
                    clickSlide()
                }} style={{ background: slide === 3 ? 'black' : 'white', border: "1px solid black", borderRadius: "50%", height: "11px", width: "11px", cursor: "pointer" }}></div>
            </div>
        </div>)
}


