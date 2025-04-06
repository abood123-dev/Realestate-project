
import React from "react";
import '../App.css';
import { Swiper,SwiperSlide }  from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../images/banner-01.jpg';
import banner2 from '../images/banner-02.jpg';
import banner3 from '../images/banner-03.jpg';
export default function Main2() {
  const images=[ banner1,banner2,banner3];
  return (
    <>
    <Swiper 
    modules={[Navigation,Pagination]}
    navigation
    pagination={{clickable:true,
      type:'progressbar'
    }}    
    loop={false} 
    >
    {images.map((image,index)=>(
      <SwiperSlide key={index}>
      <div className="bestvilla" >
      <img src={image} width={1300} height={700} alt="" className="respon"/>
     </div>
     </SwiperSlide>
    ))}
      
    </Swiper>
    <div className="hurry">
     Hurry! Get the best villa for you
    </div>
    </>
  );
}
