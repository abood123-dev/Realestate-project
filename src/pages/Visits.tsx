"use client";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { RootState } from './Store';
import { Style } from './Listing';
import '../App.css';
import { UseDispatch } from 'react-redux';
import { removeItem } from './Itemslice';
import page from '../images/page-heading-bg.jpg';
import { Link } from 'react-router-dom';
function Visits() {
  const items=useSelector((state:RootState)=>state.cart.items);
  const[IsEmpty,setempty]=useState<boolean>(false);
  const dispatch=useDispatch();
  useEffect(()=>
    {
      if(items.length===0)
        {
           setempty(true);
        }
        else
        {
            setempty(false);
        }

    },[items])
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
      <Link to='/' style={{textDecoration:'none',color: 'black'}}>  <div>Home</div> </Link> <Link to='/Listing' style={{textDecoration:'none',color:'black' }}><div>Properties</div></Link> <Link to='/Visits' style={{textDecoration:'none',color:'coral' }}>  <div>Your visits</div> </Link> <Link to='/Contact' style={{textDecoration:'none',color:'black' }}><div>Contact us</div></Link> <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your">Schedule a visit</div> </Link>  
      </div>
      </div>  
      </header>
    <img src={page} width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / YOUR VISITS</div>
    <div className='contactusss'>Your Visits</div>
    {IsEmpty ? (<div className='empty'>You havent scheduled a visit yet !</div>) : null}
      {items.map((item:Style)=>
        {
        return(
            
        <div className='visitt' key={item.id}>
         <div><img src={item.pics} className='visitpic' alt=''/></div>
         <div className='descwithprice'>
         <div className='visitdesc'>{item.description}</div>
         <div className='visitprice'>{item.price}</div> 
         </div>
         <div> <button className='cancel' onClick={()=>dispatch(removeItem(item))}>Cancel the visit</button></div>
        </div>
        
      )})}   
     </>       
  )
}
export default Visits;