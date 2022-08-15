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
                    <button type="button" className="scrollbutton" onClick={goToTop}><i class="fa-solid fa-circle-arrow-up"></i></button>
                )}
                {" "}
        </div>
    )
}

export default ScrollButton;
