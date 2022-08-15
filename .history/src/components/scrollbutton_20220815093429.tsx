import React from 'react';
import React, { useEffect, useState } from 'react';

function ScrollButton()
{
    const [showTopBtn, setShowTopBtn] = useState(false);   
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
        }, []);
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    return(
        <div className="top-to-btm">
                {" "}
                {showTopBtn && (
                    <button type="button" 
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}
                {" "}
        </div>
    )
}

export default ScrollButton;
