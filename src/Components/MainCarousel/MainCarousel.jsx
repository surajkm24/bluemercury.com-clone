import { useEffect, useRef, useState } from "react";
import { Show, Hide } from '@chakra-ui/react';
import { SlideOne } from "./SlideOne";
import { SlideTwo } from "./SlideTwo";
import { SlideThree } from "./SlideThree";

export const MainCarousel = () => {
    const [slide, setSlide] = useState(3);
    const slideRef = useRef(null);
    const clickSlide = () => {
        clearInterval(slideRef.current);
        slideRef.current = setInterval(() => {
            setSlide(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)
        }, 5000)
    }
    // useEffect(() => {
    //     if (slideRef.current !== null) return;
    //     slideRef.current = setInterval(() => {
    //         setSlide(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)
    //     }, 5000)
    // }, [])
    return (
        <div className='carousel' >
            <SlideOne slide={slide} />
            <SlideTwo slide={slide} />
            <SlideThree slide={slide} />
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


