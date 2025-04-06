
import React, { useState } from 'react'
import  '../App.css';
import phone from '../images/phone-icon.png';
import email from '../images/email-icon.png';
import page from '../images/page-heading-bg.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Contact() {
   const[input1,setone]=useState<string>('');
   const[input2,settwo]=useState<string>('');
   const[input3,setthree]=useState<string>('');
   const[input4,setfour]=useState<string>('');
   const[Notempty,setnot1]=useState<boolean>(false);
   const[Notempty2,setnot2]=useState<boolean>(false);
   const[Notempty3,setnot3]=useState<boolean>(false);
   const[Notempty4,setnot4]=useState<boolean>(false);
   const[Green,setgreen]=useState<boolean>(false);
   const HandleClick=()=>
     {
          if(input1==="")
               {
                    setnot1(true);
               }
               else
               {
                    setnot1(false)
               }

          if(input2==="")
          {
                setnot2(true);
          }
          else
          {
               setnot2(false)
          }
          if(input3==="")
          {
                    setnot3(true);
          }
          else
          {
               setnot3(false)
          }    
          if(input4==="")
          {
                    setnot4(true);
          } 
          else
          {
               setnot4(false)
          }
          if( input1!=="" && input2!=="" && input3!=="" && input4!=="" )
          {
            setgreen(true);           
          }
          else
          {
            setgreen(false);
          }

     }
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
      <Link to='/' style={{textDecoration:'none',color: 'black'}}>  <div>Home</div> </Link> <Link to='/Listing' style={{textDecoration:'none',color:'black' }}><div>Properties</div></Link> <Link to='/Visits' style={{textDecoration:'none',color:'black' }}>  <div>Your visits</div> </Link> <Link to='/Contact' style={{textDecoration:'none',color:'coral' }}><div>Contact us</div></Link> <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your">Schedule a visit</div> </Link>  
      </div>
      </div>  
      </header>
    <img src={page} width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / CONTACT US</div>
    <div className='contactus'>CONTACT US</div>
    <div className='allcont'>
       <div className='con2'>
            <div className='concon'>| Contact us</div>
            <div className='getin'>Get In Touch With Our Agents</div>
            <div className='dolor'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='phone'>
                  <div><img src={phone} width={50} height={50} alt=''/></div>
                  <div><div className='number'>010-020-0340</div> <div className='numinfo'>Phone Number</div> </div>
            </div>
            <div className='phone'>
                  <div><img src={email} width={50} height={40} alt=''/></div>
                  <div><div className='number'>info@villa.co</div> <div className='numinfo'>Business Email</div></div>
            </div>
       </div>
       <div className='fillform'>
            <div>
                 <div className='label'>Full Name</div>
                 <div><input type='text' placeholder='Your Name...' className='inp' onChange={(e)=>setone(e.target.value)}/></div>
          {Notempty ? (<div style={{color:"red"}}> You should put your Name </div>) : null}
            </div>
            <div>
                 <div className='label'>Email Address</div>
                 <div><input type='text' placeholder='Your Email...' className='inp'  onChange={(e)=>settwo(e.target.value)}/></div>
                 {Notempty2 ? (<div style={{color:"red"}}> You should put your Email </div>) : null}
            </div>
            <div>
                 <div className='label'>Subject</div>
                 <div><input type='text' placeholder='Subject...' className='inp'  onChange={(e)=>setthree(e.target.value)}/></div>
                 {Notempty3 ? (<div style={{color:"red"}}> You should put your Subject </div>) : null}
            </div>
            <div>
                 <div className='label'>Message</div>
                 <div><textarea placeholder='Your Message...' className='inp2'  onChange={(e)=>setfour(e.target.value)}/></div>
                 {Notempty4 ? (<div style={{color:"red"}}> You should put your Message </div>) : null}
            </div>
            {Green ? (<div style={{color:"green"}}> your message has sent I&#39;ll reply as soon as I can </div>): null}
            <div><button className='sendm' onClick={HandleClick}>Send Message</button></div>
            
       </div>
    </div>
    </>
  )
}
export default Contact