
import React, { useEffect, useState } from 'react';
import { Style } from './Listing';
import '../App.css';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { addItem } from './Itemslice';
import { UseSelector } from 'react-redux';
import { RootState } from './Store';
import page from "../images/page-heading-bg.jpg";
import info1 from '../images/info-icon-01.png';
import info2 from '../images/info-icon-02.png';
import info3 from '../images/info-icon-03.png';
import info4 from '../images/info-icon-04.png';
import { stat } from 'fs';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Details() {
 
  const[Data1,setdata1]=useState<Style[] | any>([]);
  const[Data2,setdata2]=useState<Style[] | any>([]);
  const items=useSelector((state:RootState)=>state.cart.items);
  const {id}=useParams();
  console.log(id);
  const parseId= id!==undefined ? parseInt(id) : undefined;
  const[Redone,setRed]=useState<boolean>(false);
  useEffect(()=>
    {
      if(items.length>0)
        {
          setRed(true);
        }
    },[items.length])
    const handleScroll2=()=>
      {
        const ScrollY=window.scrollY;
        if(ScrollY ===0 || ScrollY > 90)
          {
            setRed(true);
          }
          else
          {
            setRed(false);
          }
      }
      useEffect(() => {
        window.addEventListener('scroll', handleScroll2);
    
        return () => {
          window.removeEventListener('scroll', handleScroll2);
        };
      }, [Redone]);
    
  const dispatch=useDispatch();
  const Addtocart=()=>
    {
      dispatch(addItem(Data2));
      console.log(Redone);
    }
    useEffect(()=>
      {
        window.scrollTo(0,0)
      },[])
  useEffect(()=>
    {
      if(parseId)
        {
          fetch('https://abood123-dev.github.io/data54/real_estate.json')
          .then((res)=>res.json())
          .then((data)=>
            {
              setdata1(data);
            })
        }
    },[parseId])
    useEffect(() => {
      if (Data1.length > 0 && parseId) {
        
        const item = Data1.find((property: Style) => property.id === parseId);
        setdata2(item || null);
      }
    }, [Data1, parseId]);
    console.log(Data2);
    console.log(typeof parseId);
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
  return (
    <>  
     <header>
      <div className="Header" style={Header}>
      <Link to="/" style={{textDecoration:'none'}}><div className="villa">Villa</div> </Link> 
      <div className="secondop">
      <Link to='/' style={{textDecoration:'none',color: 'black'}}>  <div>Home</div> </Link> <Link to='/Listing' style={{textDecoration:'none',color:'coral' }}><div>Properties</div></Link> <Link to='/Visits' style={{textDecoration:'none',color:'black' }}>  <div>Your visits</div> </Link> <Link to='/Contact' style={{textDecoration:'none',color:'black' }}><div>Contact us</div></Link> <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your">Schedule a visit</div> </Link>  
      </div>
      </div>  
      </header>
    <img src={page} width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / PROPERTY DETAILS</div>
    <div className='contactuss'>PROPERTY DETAILS</div>
    
     {Data2 ? (
      <>
      <div className='data12'>
        <div className='Data2'>
             <div><img className='Data2img' src={Data2.pics} alt=''/></div>
             <div className='Data2type'>{Data2.type}</div>
             <div className='Data2row'>
             <div className='Data2desc'>{Data2.description}</div>
             <div><button className='Addvisit' onClick={Addtocart}>Add a visit</button></div>
             </div>
             <div className='Data2bla'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             <div className='Data2bla'>Dolor almesit amet, consectetur adipiscing elit, sed doesn&#39;t eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
             {Redone ? ( <div className='redcircle'>{items.length}</div> ) : null}   
        </div>
        <div className='cont3'>
             <div className='imgw'>
                <div><img src={info1} width={50} height={50} alt=''/></div> 
                <div>
                    <div className='ad1'>{Data2.area_m2} m2</div> <div style={{color:"grey"}}>Total Flat Space</div>
                </div>
             </div>
             <div className='imgw'>
                <div><img src={info2} width={50} height={50} alt=''/></div> 
                <div>
                    <div className='ad1'>Contract</div> <div style={{color:"grey"}}>Contract Ready</div>
                </div>
             </div>
             <div className='imgw'>
                 <div><img src={info3} width={50} height={50} alt=''/></div>
                  <div>
                     <div className='ad1'>Payment</div> <div style={{color:"grey"}}>Payment</div>
                  </div>
             </div>
             <div className='imgw'>
                <div><img src={info4} width={50} height={50} alt=''/></div>
                 <div>
                     <div className='ad1'>Safety</div> <div style={{color:"grey"}}>24/7 Under</div>
                 </div>
             </div>
      </div>
    
      </div>
      </>
     ) : (
      <>
      <div>Hello</div>
      </>
     )}
    </>
  );
}