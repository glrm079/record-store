
import logo from '/src/assets/logo.png'
import xsvg from '/src/assets/close.svg'
import shopCart from '/src/assets/shopping-cart-svgrepo-com.svg'
import trash from '/src/assets/trash.svg'
import search from '/src/assets/search.svg'
import HeaderCard from './headerCard'
import { useState } from "react"


export default function Header({ number, setNumber, valorTotal, setValorTotal, pesquisa, setPesquisa, discos, compra }){
    const [modal,setModal] = useState(false)
    function trashFunc(){
        discos.forEach((disco)=>{
          disco.stock = 0
        })
        setNumber(0)
        setValorTotal(0)
      }
    
      return(
        <>
            <header className='animated-background fixed top-0 w-full h-20 z-10'>
                <div className="flex flex-row items-center justify-between px-6 h-20 w-full ">
                    <img className="w-36" src={logo} alt="" />
                    <div className='flex flex-row justify-center items-center'>
                    <img src={search}  className="w-8" alt="" />
                    <input
                        onChange={(ev) => setPesquisa(ev.target.value)}
                        className="h-5 mr-3 bg-transparent text-zinc-50 border-b w-20 sm:w-60 focus:outline-none focus:border-b focus:border-zinc-50 active:border-b-2 active:border-zinc-50"
                        type="text"
                    />
                    <img onClick={()=>{setModal(true)}} className="w-8" src={shopCart} alt="" />
                    {
                        number !== 0?<>
                        <p className='text-zinc-50  text-sm border border-zinc-50 rounded-full p-1 px-3'>{number}</p>
                        </>:null
                    }
                    </div>

                    {
                        modal ? <>
                            <div className=" z-30 justify-between flex-col animated-background absolute  rounded  text-zinc-50  h-screen m-0 left-0 top-0    ">
                                <header className="p-5 flex flex-row justify-between">
                                    <img src={xsvg} onClick={()=>{setModal(false)}} className="w-8" alt="" />
                                    <img src={trash} onClick={trashFunc} className="w-8" alt="" />
                                </header>
                                
                                <main className='flex flex-col gap-4 p-4 overflow-auto min-h-40 max-h-96
                                '>
                                    {
                                    number !== 0?<>
                                        {
                                        <HeaderCard
                                            setNumber={setNumber}
                                            setValorTotal={setValorTotal}
                                            discos={discos}
                                            compra={compra}
                                        />
                                        }
                                    </>:<>
                                        <p className='text-center justify-self-center'>o carrinho esta vazio!</p>
                                    </>
                                    }
                                </main>
                                <footer className='p-0 px-6'>
                                {
                                    number !== 0?<>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold text-3xl'>Total:</p>
                                        <p className='text-3xl'>${valorTotal}</p>
                                    </div>
                                    <button className='bg-transparent border border-zinc-50 w-full h-10 mt-4'>Comprar</button>
                                    </>:null
                                }
                                </footer>
                            </div>
                        </>: null 
                    }
                    
                </div>
                <hr className='m-auto' />
            </header>
     
        </>
      )
}