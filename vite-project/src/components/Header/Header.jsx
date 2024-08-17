
import logo from '/src/assets/logo.png'
import xsvg from '/src/assets/close.svg'
import shopCart from '/src/assets/shopping-cart-svgrepo-com.svg'
import trash from '/src/assets/trash.svg'
import search from '/src/assets/search.svg'
import add from '/src/assets/add2.svg'
import minus from '/src/assets/remove.svg'
import { useState } from "react"


export default function HeaderHeader({ number, setNumber, valorTotal, setValorTotal, pesquisa, setPesquisa, discos, compra }){
    const [modal,setModal] = useState(false)
    function removeOne(album){
        props.setNumber(number => props.number -= 1)
        props.setValorTotal(valorTotal => props.valorTotal -= album.price)
        album.stock -= 1
      }
      function trashFunc(){
        props.discos.forEach((disco)=>{
          disco.stock = 0
        })
        props.setNumber(0)
        props.setValorTotal(0)
      }
      function trashFuncSelf(album){
        const stock = album.stock
        const remove = stock * album.price
        props.setNumber(number => number -= stock)
        props.setValorTotal(valorTotal => valorTotal -= remove)
        album.stock = 0
      }
      return(
        <>
            <header className='animated-background fixed top-0 w-full h-20'>
                <div className="flex flex-row items-center justify-between px-6 h-20 w-full ">
                    <img className="w-36" src={logo} alt="" />
                    <div className='flex flex-row justify-center items-center'>
                    <img src={search}  className="w-8" alt="" />
                    <input
                        onChange={(ev) => props.setPesquisa(ev.target.value)}
                        className="h-5 mr-3 bg-transparent text-zinc-50 border-b w-60 md:w-full focus:outline-none focus:border-b focus:border-zinc-50 active:border-b-2 active:border-zinc-50"
                        type="text"
                    />
                    <img onClick={()=>{setModal(modal => true)}} className="w-8" src={shopCart} alt="" />
                    {
                        number !== 0?<>
                        <p className='text-zinc-50  text-sm border border-zinc-50 rounded-full p-1 px-3'>{number}</p>
                        </>:null
                    }
                    </div>

                    {
                        modal ? <>
                            <div className="flex justify-between flex-col min-w-96 w-96 h-fit animated-background absolute top-2 right-0 m-4 rounded shadow-md text-zinc-50 ">
                                <header className="p-5 flex flex-row justify-between">
                                    <img src={xsvg} onClick={()=>{setModal(modal => false)}} className="w-8" alt="" />
                                    <img src={trash} onClick={trashFunc} className="w-8" alt="" />
                                </header>
                                
                                <main className='flex flex-col gap-4 p-4 overflow-auto min-h-40 max-h-96
                                '>
                                    {
                                    number !== 0?<>
                                        {
                                        props.discos.map((disco)=>{
                                            if(disco.stock !== 0){
                                            return(
                                                <>
                                                <div className='flex flex-row h-fit p-3  hover:border hover:border-zinc-50'> 
                                                <div>
                                                    <img className='w-40 object-cover' src={disco.coverImage} alt="" />
                                                </div>
                                                <div className=' min-w-60  max-w-60 flex p-2 flex-col justify-between'>
                                                    <div>
                                                    <div className='flex flex-row justify-between'>
                                                        <h2 className='font-bold'>{disco.title}</h2>
                                                        <img className='w-6' onClick={()=>{trashFuncSelf(disco)}} src={trash} alt="" />
                                                    </div>
                                                    <p>{disco.artist}</p>
                                                    </div>
                                                    <div className='flex flex-row justify-between gap-24'>
                                                        <div className='flex flex-row gap-2'>
                                                        <button onClick={()=>{removeOne(disco)}}>
                                                            <img src={minus} className="w-6" alt="" />
                                                        </button>
                                                        <p>{disco.stock}</p>
                                                        <button onClick={()=>{props.compra(disco)}}>
                                                            <img src={add} className="w-6" alt="" />
                                                        </button>
                                                        </div>
                                                        <p>${disco.price * disco.stock}</p>
                                                    </div>
                                                </div>
                                                </div>
                                            </>
                                            )
                                            }
                                        })
                                        }
                                    </>:<>
                                        <p className='text-center justify-self-center'>o carrinho esta vazio!</p>
                                    </>
                                    }
                                </main>
                                <footer className='p-3 px-6'>
                                {
                                    number !== 0?<>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold text-3xl'>Total:</p>
                                        <p className='text-3xl'>${props.valorTotal}</p>
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