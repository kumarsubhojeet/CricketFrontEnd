import React from 'react'
import Logo from '../../images/logo.PNG'
import { Link } from 'react-router-dom'

export default function Pc_view() {
    return (
        <>
            <div className="pc_main rounded-md flex items-center justify-between w-[85%] my-10 mx-auto ">
                <div className="logo">
                    <Link to='/'>    <img src={Logo} className=' rounded-md object-cover h-[80px] w-[80px] ' alt="logo_error" />
                    </Link></div>

                <div className="pc_menus">
                    <ul className=" flex items-center justify-around ">
                        <Link to='/'>
                            <li className=' mx-6 text-white font-semibold text-base hover:text-[#3BB072] cursor-pointer '>Home</li>

                        </Link>
                        <Link to='/about'><li className=' mx-6 text-white font-semibold text-base hover:text-[#3BB072] cursor-pointer '>About</li>
                        </Link>
                     <Link to='/contact'>   <li className=' mx-6 text-white font-semibold text-base hover:text-[#3BB072] cursor-pointer '>Contact</li>
                     </Link>
                        {/* <li className=' mx-6 text-white font-semibold text-base hover:text-[#3BB072] cursor-pointer '>Players</li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}
