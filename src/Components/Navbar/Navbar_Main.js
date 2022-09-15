import React from 'react'
import Movile_View from './Movile_View'
import Pc_view from './Pc_view'

export default function Navbar() {
  return (
    <>
      <div className="navbar_main">
        <div className="pc_view sm:hidden lg:block">
          <Pc_view />
        </div>

        <div className="mobile_view lg:hidden sm:block tab:hidden">
          <Movile_View />
        </div>
      </div>
    </>
  )
}
