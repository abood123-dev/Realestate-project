import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import property3 from '../images/property-03.jpg';
import property5 from '../images/property-05.jpg';
import property6 from '../images/property-06.jpg';
function Main5 ( ) {
  const [Visible1,setvisi1]=useState(true);
  const[Visible2,setvisi2]=useState(false);
  const[Visible3,setvisi3]=useState(false);
 const Handlefirst=()=>
  {
    setvisi1(true);
    setvisi2(false);
    setvisi3(false);
  }
  const Handlesecond=()=>
    {
      setvisi1(false);
      setvisi2(true);
      setvisi3(false);
    }
  const Handlethird=()=>
      {
        setvisi1(false);
        setvisi2(false);
        setvisi3(true);
      }
  return (
 <>
<div className='options'>
  <div className='bf'>
       <div className='bd'>| Best Deal</div>
        <div className='find'>Find Your Best Deal Right Now! </div>  
  </div>    
  <div className='avp'>
      <div className='first' style={{backgroundColor: Visible1 ? 'coral' : 'black' }} onClick={Handlefirst} >Apartment</div> 
      <div className='first' style={{backgroundColor: Visible2 ? 'coral' : 'black' }} onClick={Handlesecond} >Villa House</div>
       <div className='first' style={{backgroundColor: Visible3 ? 'coral' : 'black' }} onClick={Handlethird}>Penthouse</div>
  </div>
</div>    
{ Visible1 ?  <div className='allcol'>
  <div className='firstcol'>
       <div className='row1'> <div className='rowdesc'>Total Flat Space</div> <div className='rownum'>185 m2</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Floor number</div> <div className='rownum'>26th</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Number of rooms</div> <div className='rownum'>4</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Parking Available</div> <div className='rownum'>Yes</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Payment Process</div> <div className='rownum'>Bank</div>   </div>
  </div>  
  <div>
      <img src={property5} width={400} height={300} alt='' className='property5'/>
  </div>
  <div className='thirdcol'>
       <div className='extrainfo'>Extra Info About Property</div>
       <div className='extra2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
       <div className='extra2'>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</div>
       <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>   <div> <div className="calenderr"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="yourr">Schedule a visit</div></div> </Link>
  </div>
  
</div> : null}
{Visible2 ?  <div className='allcol'>
  <div className='firstcol'>
       <div className='row1'> <div className='rowdesc'>Total Flat Space</div> <div className='rownum'>250 m2</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Floor number</div> <div className='rownum'>26th</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Number of rooms</div> <div className='rownum'>5</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Parking Available</div> <div className='rownum'>Yes</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Payment Process</div> <div className='rownum'>Bank</div>   </div>
  </div>  
  <div>
      <img src={property6} width={400} height={300} alt=''/>
  </div>
  <div className='thirdcol'>
       <div className='extrainfo'>Extra Info About Villa</div>
       <div className='extra2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
       <div className='extra2'>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</div>
       <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>  <div>  <div className="calenderr"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="yourr">Schedule a visit</div> </div> </Link>
  </div>
  
</div> : null}  
{Visible3 ?   <div className='allcol'>
  <div className='firstcol'>
       <div className='row1'> <div className='rowdesc'>Total Flat Space</div> <div className='rownum'>320 m2</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Floor number</div> <div className='rownum'>34th</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Number of rooms</div> <div className='rownum'>6</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Parking Available</div> <div className='rownum'>Yes</div>   </div>
       <div><hr style={{width:"160px" }}/>  </div> 
       <div className='row1'> <div className='rowdesc'>Payment Process</div> <div className='rownum'>Bank</div>   </div>
  </div>  
  <div>
      <img src={property3} width={400} height={300} alt=''/>
  </div>
  <div className='thirdcol'>
       <div className='extrainfo'>Extra Info About  Penthouse</div>
       <div className='extra2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
       <div className='extra2'>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</div>
       <Link to='/Listing' style={{textDecoration:'none',color:"black"}}>   <div> <div className="calenderr"><img src='https://th.bing.com/th/id/OIP.04r7fFOqv3ONvvJZfokfMwAAAA?rs=1&pid=ImgDetMain' alt="" width="25" height="25" className="whitecal"  /> </div> <div className="yourr">Schedule a visit</div></div> </Link>
  </div>
  
</div> : null}    
 </>
  )
}

export default Main5