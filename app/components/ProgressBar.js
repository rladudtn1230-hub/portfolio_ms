// app/components/progressBar/page.js
"use client"
import { useEffect, useRef, useState } from 'react';

export default function ProgressBar({ onPercentageChange }) {
    const progressRef = useRef(null);
    const [percentage, setPercentage] = useState(0);

    // app/components/progressBar/page.js
    useEffect(() => {
        const element = progressRef.current;
        if (!element) return;

        const progressBar = element.querySelector('.progress_bar');
        const progressButton = progressBar?.querySelector('.progress_button');
        
        if (!progressBar || !progressButton) return;

        let isDragging = false;

        const slide = (event) => {
            if (!isDragging) return;

            const clientX = event.clientX || 
                        (event.touches && event.touches[0]?.clientX) || 
                        (event.changedTouches && event.changedTouches[0]?.clientX);

            if (clientX === undefined) return;

            const barRect = progressBar.getBoundingClientRect();
            const x = clientX - barRect.left;

            let newPercentage = (x / barRect.width) * 100;
            newPercentage = Math.max(0, Math.min(100, newPercentage));

            
            setPercentage(newPercentage);
            onPercentageChange(newPercentage);
        };

        const dragStart = (event) => {            
            event.preventDefault();
            event.stopPropagation();
            isDragging = true;
            
            // 즉시 첫 번째 위치 계산
            slide(event);
            
            // document에 이벤트 리스너 추가
            document.addEventListener('mousemove', slide, { passive: false });
            document.addEventListener('touchmove', slide, { passive: false });
            
            element.classList.add('dragging', 'on');
        };
        
        const dragDone = (event) => {                        
            isDragging = false;
            
            document.removeEventListener('mousemove', slide);
            document.removeEventListener('touchmove', slide);            
            element.classList.remove('dragging');
            
            if (!element.matches(':hover')) {
                element.classList.remove('on');
            }
        };
        const clickDrag = (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            // 드래그 중이 아닐 때만 클릭으로 처리
            if (!isDragging) {
                const clientX = event.clientX || 
                            (event.touches && event.touches[0]?.clientX) || 
                            (event.changedTouches && event.changedTouches[0]?.clientX);
        
                if (clientX === undefined) return;
        
                const barRect = progressBar.getBoundingClientRect();
                const x = clientX - barRect.left;
        
                let newPercentage = (x / barRect.width) * 100;
                newPercentage = Math.max(0, Math.min(100, newPercentage));
        
                setPercentage(newPercentage);
                onPercentageChange(newPercentage);                
            }
        };
        // 이벤트 리스너 등록
        progressButton.addEventListener('mousedown', dragStart);
        progressButton.addEventListener('touchstart', dragStart, { passive: false });
        document.addEventListener('mouseup', dragDone);
        document.addEventListener('touchend', dragDone);
        document.addEventListener('touchcancel', dragDone);    
        progressBar.addEventListener('click', clickDrag);
        progressBar.addEventListener('touchend', clickDrag);

        return () => {
            progressButton.removeEventListener('mousedown', dragStart);
            progressButton.removeEventListener('touchstart', dragStart);
            document.removeEventListener('mouseup', dragDone);
            document.removeEventListener('touchend', dragDone);
            document.removeEventListener('touchcancel', dragDone);
            document.removeEventListener('mousemove', slide);
            document.removeEventListener('touchmove', slide);
            progressBar.removeEventListener('click', clickDrag);
            progressBar.removeEventListener('touchend', clickDrag);
        };
    }, [setPercentage]);

    return (
        <div ref={progressRef} className="progress_wrap">
            <div className="progress_bar">
                <span 
                    className="progress_button"
                    style={{ left: `${percentage}%` }}
                >
                    <span className="progress_shape"></span>
                </span>
            </div>
        </div>
    );
}