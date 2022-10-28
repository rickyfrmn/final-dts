import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { signingOut } from "../utils/firebase/signout";

export const HomeNew = () => {
    // protected route
    const navigate = useNavigate();
  
    const signOut = async () => {
      // localStorage.removeItem("access_token");
      const loggedOut = await signingOut();
      if (!loggedOut.message) {
        navigate("/signup");
      } 
    };
    
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);
  
    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
      if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });
      }
    };
  
    // add/remove scroll event listener
    useEffect(() => {
      var header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(header.top, header.height)
      }
  
      window.addEventListener('scroll', handleScrollEvent);
  
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    return (
      <div>
        <h1>HOME</h1>
        <button onClick={signOut}>SIGN OUT</button>
      </div>
    );
  };