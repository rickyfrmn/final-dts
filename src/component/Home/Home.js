import { useNavigate } from "react-router-dom";
import { signingOut } from "../utils/firebase/signout";
import React, { useState, useRef, useEffect } from 'react';

export const Home = () => {
  // protected route
  const navigate = useNavigate();

  const signOut = async () => {
    // localStorage.removeItem("access_token");
    const loggedOut = await signingOut();
    if (!loggedOut.message) {
      navigate("/signin");
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
    <div className="App" style={{ marginTop: sticky.offset }}>
      <div id="sticky-header" className={`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
          <a href="#">DTS NEWS</a>
          {/* <a href="#">Popular</a> */}
          {/* <a href={signOut} className="right">Sign Out</a> */}
          <button onClick={signOut}>Login</button>
        

        {/* <div>
          <h1>HOME</h1>
          
        </div> */}
      </div>
      <div className="row">
        <div className="main">
          {/* <h2>Kupu-kupu</h2>
          <h5>tanggal</h5> */}
          <img className="fakeimg" src="/images/kupu.jpg" />
          <p>sumber</p>
          <p>Keterangan</p>
          <br />
          {/* <h2>Unta</h2>
          <h5>Tanggal</h5> */}
          <img className="fakeimg" src="/images/unta.jpg" />
          <p>Sumber</p>
          <p>Keterangan</p>
          <br />
          
        </div>
        <div className="side">
          <h1>Popoular</h1>
          {/* <h2>Kado</h2> */}
          <h5>Sumber:</h5>
          <a href=''>
          <img className="fakeimg" src="/images/kado.jpg" />
          </a>
          <p>Keterangan</p>
          
        </div>
      </div>

      <div className="footer">
        {/* <h2>Footer</h2> */}
      </div>  
      
    </div>  
  );
};
