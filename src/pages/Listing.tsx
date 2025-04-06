"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import page from '../images/page-heading-bg.jpg';
import '../App.css';
export interface Style
{
    id: number,
    type:string,
    description:string,
    price: string,
    bedrooms:number,
    bathrooms:number,
    area_m2:number,
    pics:string,
    floors:number
}
function Listing() {
  const [listings, setListings] = useState([]);
  const [listings2, setListings2] = useState([]);
  const [Visible1,setvisi1]=useState(false);
  const[Visible2,setvisi2]=useState(false);
  const[Visible3,setvisi3]=useState(false);
  const[Visible4,setvisi4]=useState(true);
  const [Loading,setloading]=useState(true);
 const Handlefirst=()=>
  {
    setvisi1(true);
    setvisi2(false);
    setvisi3(false);
    setvisi4(false);
    setListings(listings2.filter((num:Style)=>num.type==='apartment'));
  }
  const Handlesecond=()=>
    {
      setvisi1(false);
      setvisi2(true);
      setvisi3(false);
      setvisi4(false);
      setListings(listings2.filter((num:Style)=>num.type==='villa'));
    }
  const Handlethird=()=>
      {
        setvisi1(false);
        setvisi2(false);
        setvisi3(true);
        setvisi4(false);
        setListings(listings2.filter((num:Style)=>num.type==='penthouse'));
      }
      const Handlefourth=()=>
        {
          setvisi1(false);
          setvisi2(false);
          setvisi3(false);
          setvisi4(true);
          setListings(listings2);
        }
  
  useEffect(() => {
    fetch('https://abood123-dev.github.io/data54/real_estate.json')
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        setListings(data);
        setListings2(data);
        if(data)
          {
            setloading(false);
          }
  })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
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
      <Link to='/' style={{textDecoration:'none',color: 'black'}}>  <div>Home</div> </Link> <Link to='/Listing' style={{textDecoration:'none',color:'coral' }}><div>Properties</div></Link> <Link to='/Visits' style={{textDecoration:'none',color:'black' }}>  <div>Your visits</div> </Link> <Link to='/Contact' style={{textDecoration:'none',color:'black' }}><div>Contact us</div></Link> <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div className="calender"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="your">Schedule a visit</div> </Link>  
      </div>
      </div>  
      </header>
    <img src={page} width={1100} height={450} alt='' className='contimg'/>
    <div className='slash'>HOME / PROPERTIES</div>
    <div className='contactus'>PROPERTIES</div>  
    <div className='avvp'>
    <div className='first' style={{backgroundColor: Visible4 ? 'coral' : 'black' }} onClick={Handlefourth}>Show all</div>
      <div className='first' style={{backgroundColor: Visible1 ? 'coral' : 'black' }} onClick={Handlefirst} >Apartment</div> 
      <div className='first' style={{backgroundColor: Visible2 ? 'coral' : 'black' }} onClick={Handlesecond} >Villa House</div>
       <div className='first' style={{backgroundColor: Visible3 ? 'coral' : 'black' }} onClick={Handlethird}>Penthouse</div>
       
  </div>
  {Loading ? (<div className='loading'>our properties are Loading ...</div>) : null}
    <div className='properties'>
        {listings.map((listing:Style) => (
            <div className='property' key={listing.id}>
              <div>  
               <img src={listing.pics} className='propic' alt=''/>
              </div>
              <div className='prico'>
            <div className='protype'>{listing.type}</div>
            <div className='proprice'> {listing.price}</div>
              </div>
            <div className='prodesc'>{listing.description}</div>
           <div className='bedbath'>
            <div className='prodesc2'>Bedrooms: <span className='pronum'>{listing.bedrooms}</span> </div>
            <div className='prodesc2'>Bathrooms:<span className='pronum'>{listing.bathrooms}</span> </div>
            </div>
            <div className='bedbath'> 
            <div className='prodesc2'>Area:<span className='pronum'>{listing.area_m2}</span>  m²</div>
            <div className='prodesc2'>Floor: <span className='pronum'>{listing.floors}</span></div>
            </div>
            <div> <Link to={`/Details/${listing.id}`}><button className='probtn'>Schedule a visit</button></Link>  </div>
            
            </div>
        ))}
      
    </div>
    </>
  );
}

export default Listing;