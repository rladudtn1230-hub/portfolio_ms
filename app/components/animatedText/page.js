"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react";


export default function AnimatedText({text}) {    
    const textRef = useRef(null);
    useEffect(()=> {
        if(textRef.current) {
            const spans = textRef.current.querySelectorAll("span");
            spans.forEach((span, index) => {
                setTimeout(()=>{
                    span.style.opacity = 1;                    
                }, index * 200)
            })
        }
    }, [])
    return (      
        <li ref={textRef}>
            {[...text].map((value, index) => (
                <span key={index} style={{ opacity: 0 }}>
                    {value}
                </span>
            ))}
        </li>
    )
}