import React from "react"
import logo from '/src/assets/logo.png'
import shopCart from '/src/assets/cart-svgrepo-com.svg'

function Header(){
    return(
        <div className="animated-background flex flex-row justify-between px-10 ">
            <img className="w-40" src={logo} alt="" />
            <img className="w-12" src={shopCart} alt="" />
        </div>
    )
}

export default Header