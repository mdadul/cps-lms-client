import React, { useEffect, useState } from 'react'
import UpArrow from "../../img/up.png"
export default function GotoTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <div>
        {showButton && <button className="fixed bottom-10 right-10" onClick={scrollToTop}>
            <img src={UpArrow} alt="Up Arrow" />
        </button>}
    </div>
  )
}
