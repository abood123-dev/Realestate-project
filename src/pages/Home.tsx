import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
function Home() {
  const [Isvisible,setIsvisible]=useState(true);
  const handleScroll=()=>
    {
      const ScrollY=window.scrollY;
      if(ScrollY ===0 || ScrollY > 90)
        {
          setIsvisible(true);
        }
        else
        {
          setIsvisible(false);
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [Isvisible]);
const Header :React.CSSProperties = 
{
paddingTop: '20',
backgroundColor: '#f5f5f5',
top: '0',
paddingBottom:"20",
opacity: Isvisible ? 1 : 0,
transition: "ease-out 0.3s",
position:"fixed",
zIndex:'100',
width:"100%"
}
useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <header>
      <div className="Header" style={Header}>
     <Link to="/" style={{textDecoration:'none'}}><div className="villa">Villa</div> </Link>  
      <div className="secondop">
      <Link to='/' style={{textDecoration:'none',color: 'coral'}}>  <div>Home</div> </Link> <Link to='/Listing' style={{textDecoration:'none',color:'black' }}><div>Properties</div></Link> <Link to='/Visits' style={{textDecoration:'none',color:'black' }}>  <div>Your visits</div> </Link> <Link to='/Contact' style={{textDecoration:'none',color:'black' }}><div>Contact us</div></Link> <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your">Schedule a visit</div> </Link>  
      </div>
      </div>  
      </header>
      <Main2/>
      <Main3/>
      <Main4/>
      </>
  );
}

export default Home;