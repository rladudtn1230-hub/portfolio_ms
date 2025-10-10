'use client'
import AOS from "aos";
import { useEffect } from "react";
export default function AosScroll() {
    useEffect(() => {
        AOS.init({
            once: true
        });
        AOS.refresh();
    }, []);
    return null;
}