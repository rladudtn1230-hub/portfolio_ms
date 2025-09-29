"use client"
import { useEffect, useRef } from "react";

export default function AnimatedText({text = ""}) {    
    const textRef = useRef(null);
    
    useEffect(() => {
        if(textRef.current && text) {
            const spans = textRef.current.querySelectorAll("span");
            spans.forEach((span, index) => {
                setTimeout(()=>{
                    span.style.opacity = 1;
                }, index * 250)
            })
        }
    }, [text])
    
    // text가 없으면 빈 요소 반환
    if (!text || typeof text !== 'string') {
        return <li></li>;
    }
    
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