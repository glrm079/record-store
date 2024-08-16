import './App.css'
import logo from '/src/assets/logo.png'
import xsvg from '/src/assets/close.svg'
import shopCart from '/src/assets/shopping-cart-svgrepo-com.svg'
import trash from '/src/assets/trash.svg'
import search from '/src/assets/search.svg'
import add from '/src/assets/add2.svg'
import minus from '/src/assets/remove.svg'
import { useState } from "react"
import discos from './data/discos.json'

function App() {
  const [modal,setModal] = useState(false)
  const [number,setNumber] = useState(0)
  const [valorTotal,setValorTotal] = useState(0)
  const [pesquisa,setPesquisa] = useState("")

  function compra(album){
    setNumber(number => number += 1)
    setValorTotal(valorTotal => valorTotal += album.price)
    album.stock += 1
  }
  function removeOne(album){
    setNumber(number => number -= 1)
    setValorTotal(valorTotal => valorTotal -= album.price)
    album.stock -= 1
  }
  
  return (
    <>
      <header className='animated-background fixed top-0 w-full h-20'>
        <div className="flex flex-row items-center justify-between px-6 h-20 w-full ">
            <img className="w-36" src={logo} alt="" />
            <div className='flex flex-row justify-center items-center'>
              <img src={search}  className="w-8" alt="" />
              <input
                onChange={(ev) => setPesquisa(ev.target.value)}
                className="h-5 mr-3 bg-transparent text-zinc-50 border-b w-60 focus:outline-none focus:border-b focus:border-zinc-50 active:border-b-2 active:border-zinc-50"
                type="text"
              />
              <img onClick={()=>{setModal(modal => true)}} className="w-7" src={shopCart} alt="" />
              {
                number !== 0?<>
                  <p className='text-zinc-50'>{number}</p>
                </>:null
              }
            </div>

            {
                modal ? <>
                    <div className="flex justify-between flex-col min-w-96 w-96 h-fit animated-background absolute top-2 right-0 m-4 rounded shadow-md text-zinc-50 ">
                        <header className="p-5 flex flex-row justify-between">
                            <img src={xsvg} onClick={()=>{setModal(modal => false)}} className="w-8" alt="" />
                            <img src={trash} className="w-8" alt="" />
                          
                        </header>
                        
                        <main className='flex flex-col gap-4 p-4 overflow-auto min-h-40 max-h-96
                        '>
                            {
                              number !== 0?<>
                                {
                                  discos.map((disco)=>{
                                    if(disco.stock !== 0){
                                      return(
                                        <>
                                        <div className='flex flex-row h-fit p-3  hover:border hover:border-zinc-50'> 
                                          <div>
                                            <img className='w-40 object-cover' src={disco.coverImage} alt="" />
                                          </div>
                                          <div className=' min-w-60  max-w-60 flex p-2 flex-col justify-between'>
                                            <div>
                                              <h2 className='font-bold'>{disco.title}</h2>
                                              <p>{disco.artist}</p>
                                            </div>
                                            <div className='flex flex-row justify-between gap-24'>
                                                <div className='flex flex-row gap-2'>
                                                  <button onClick={()=>{removeOne(disco)}}>
                                                    <img src={minus} className="w-6" alt="" />
                                                  </button>
                                                  <p>{disco.stock}</p>
                                                  <button onClick={()=>{compra(disco)}}>
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
     
      <div className='flex flex-wrap justify-center gap-3 m-5 text-zinc-50 mt-24'>
          {pesquisa !== ""?<>
            {
               discos.map((album) => (
                album.artist.toLowerCase().includes(pesquisa.toLowerCase()) || album.title.toLowerCase().includes(pesquisa.toLowerCase())   ?<>
                    <div key={album.id} className='w-72 h-96 hover:border hover:border-zinc-50 p-2'>
                      <img src={album.coverImage} alt={album.title} className='w-full object-cover'/>
                      <h2 className='font-extrabold text-sm'>{album.title} </h2>
                      <div className='flex flex-row justify-between'>
                      <p>{album.artist}</p>
                      <p><strong>$</strong> {album.price}</p>
                      </div>
                      <button onClick={()=>{compra(album)}} className='hover:animated-background px-3 py-1 rounded text-white  animate-gradient'>Comprar</button>
                    </div>
                </>:null 
              ))
            }
            
          </>:<>
            {
              discos.map((album) => (
                <div key={album.id} className='w-72 h-96  hover:border hover:border-zinc-50 p-2'>
                  <img src={album.coverImage} alt={album.title} className='w-full object-cover'/>
                  <h2 className='font-extrabold text-sm'>{album.title} </h2>
                  <div className='flex flex-row justify-between'>
                  <p>{album.artist}</p>
                  <p><strong>$</strong> {album.price}</p>
                  </div>
                  <button onClick={()=>{compra(album)}} className='bg-transparent border border-zinc-50 px-3 py-1 rounded text-white'>Comprar</button>
                </div>
              ))
            }
          </>
        }
      </div>
    </>
  )
}

export default App
