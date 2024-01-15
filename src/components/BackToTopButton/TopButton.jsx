import React,{useState, useEffect} from 'react'
import './TopButton.css'
import { FaCircleArrowUp } from "react-icons/fa6";


const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      const secondSectionHeight = document.getElementById('about').offsetHeight;
      if (window.scrollY > secondSectionHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

  return (
    // <button  onClick={scrollToTop}>
        <FaCircleArrowUp className={`back-to-top ${isVisible ? 'visible' : ''}`}
         onClick={scrollToTop} />
    // </button>
  )
}

export default TopButton
