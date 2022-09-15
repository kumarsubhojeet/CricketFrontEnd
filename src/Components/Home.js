import React , {useState , useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar_Main'
import Cricket_img from '../images/Cricket_img.jpg'
import Card from '../Components/Players/Card'
import Footer from './Footer'


export default function Home() {
  return (
    <>
    
      <div className="home_main">
        <div className="relative bg-[#3BB072] w-[100%] h-[100vh] ">
          <img src={Cricket_img} className=' brightness-50 object-cover w-full min-h-screen	 ' alt="" />

          <div class=" absolute brightness-100  top-2 left-0 right-0 bottom-0 ">
            <Navbar />

            <div className='Jumbo_home_main mx-auto text-center  '> 
              <h1 className='Jumbo_h1 text-5xl mt-20 sm:mt-10 text-white '>Get Cricket Players Info.</h1>

              <div className=' my-10 mx-auto '>
                <Card />
                <Footer/>
              </div>
            </div>
          </div>
        </div>
        
     
      </div>

    </>
  )
}
