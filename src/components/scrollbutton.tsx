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
        <div className="topbutton">
                {" "}
                {showTopBtn && (
                    <div className="scrollbutton" onClick={goToTop}><i className="fa-solid fa-circle-arrow-up"></i></div>
                )}
                {" "}
        </div>
    )
}

export default ScrollButton;
