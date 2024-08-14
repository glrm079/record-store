import React from "react"
import logo from '/src/assets/logo.png'
import xsvg from '/src/assets/x-thin-svgrepo-com.svg'
import shopCart from '/src/assets/cart-svgrepo-com.svg'
import { useState } from "react"


function Header(){
    const [modal,setModal] = useState(false)
    const [disc,setDisc] = useState([])
    
    return(
        <div className="animated-background flex flex-row justify-between px-6 ">
            <img className="w-36" src={logo} alt="" />
            <img onClick={()=>{setModal(modal => true)}} className="w-8" src={shopCart} alt="" />
            {
                modal ? <>
                    <div className=" transition-transform flex justify-between flex-col w-96 h-60 bg-zinc-50 absolute right-0 m-4 rounded shadow-md ">
                        <header className="p-5">
                            <img src={xsvg} onClick={()=>{setModal(modal => false)}} className="w-6" alt="" />
                        </header>
                        
                        <main>
                            {
                                disc.length !== 0 ?<>
                                </>: <>
                                    <p className="text-center text-zinc-600" >Não ha nada no carinho!</p>
                                </>
                            }
                        </main>
                        
                        <footer className="   p-5">
                        </footer>
                    </div>
                </>: null 
            }
        </div>
    )
}

export default Header