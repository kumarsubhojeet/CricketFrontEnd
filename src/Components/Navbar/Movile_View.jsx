import React, { useState } from 'react';
import Logo from '../../images/logo.PNG'
import { Button, Drawer } from 'antd';
import Icon, { AlignRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

export default function Movile_View() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="pc_main rounded-md flex items-center justify-between w-[97%]  mx-auto">
        <div className="logo">
          <Link to='/' ><img src={Logo} className=' rounded-md object-cover h-[80px] w-[80px] ' alt="logo_error" />
          </Link></div>

        <div className="mobile_menus">
          <AlignRightOutlined className=' text-white font-semibold text-4xl pr-3 ' onClick={showDrawer} />
        </div>

        <Drawer title="CLOSE" width={275} placement="right" onClose={onClose} open={open}>
          <ul className="  ">
            <Link to='/'>
              <li className=' my-10 text-[#3BB072] font-semibold text-base hover:text-[#3BB072] cursor-pointer '>Home</li>

            </Link>
            <Link to='/about'><li className=' my-10 text-[#3BB072] font-semibold text-base hover:text-[#3BB072] cursor-pointer '>About</li>
            </Link>
           <Link to='/contact'> <li className=' my-10 text-[#3BB072] font-semibold text-base hover:text-[#3BB072] cursor-pointer '>Contact</li>
           </Link>
          </ul>
        </Drawer>
      </div>
    </>
  )
}
