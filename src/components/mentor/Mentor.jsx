import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../images/Ellie_Anderson.jpg';
import image2 from '../../images/John_Morgan.jpg';
import image3 from '../../images/Mia_Williams.jpg';
import image4 from '../../images/Nia_Adebayo.jpg';
import image5 from '../../images/Rigo_Louie.jpg';

function Mentor() {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  gap: 10

};
return (

  <div className='w-3/4 m-auto'>
    <h1 className='text-4xl font-bold text-center '>Our Extert Mentors</h1>
    <div className='mt-20'>
    <Slider {...settings}>
     {data.map((d)=>(
      <div className='bg-white h-[450px] text-black rounded-xl '>
        <div className='h-56 rounded-t-xl bg-indigo-400 flex justify-center item-center'>
          <img src={d.img} alt='' className='h-44 w-44 rounded-full mt-6'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 p-4'>
          <p className='text-xl font-semibold m-0' >{d.name}</p>
          <p className='m-0'>{d.review}</p>
          <button className='bg-indigo-400 text-white text-lg px-6 py-1 rounded-full hover:bg-sky-300 w-[170px]'>Linkdien</button>
        </div>
      </div>
     ))}
     </Slider>
    </div>
    </div>
)
}

const data = [
{
  name: `John Morgan`,
  img: image1,
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
},
{
  name: `Ellie Anderson`,
  img: image2,
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
},
{
  name: `Nia Adebayo`,
  img: image3,
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
},
{
  name: `Rigo Louie`,
  img: image4,
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
},
{
  name: `Mia Williams`,
  img: image5,
  review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
},

];


export default Mentor