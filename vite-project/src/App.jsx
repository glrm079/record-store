import './App.css'
import { useState } from "react"
import discos from './data/discos.json'

function App() {
  const [number,setNumber] = useState(0)
  const [valorTotal,setValorTotal] = useState(0)
  const [pesquisa,setPesquisa] = useState("")

  function compra(album){
    setNumber(number => number += 1)
    setValorTotal(valorTotal => valorTotal += album.price)
    album.stock += 1
  }


  
  return (
    <>
      <Header
        number={number}
        setNumber={setNumber}
        valorTotal={valorTotal}
        setValorTotal={setValorTotal}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        discos={discos}
        compra={compra}
      />
      
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
                      <button onClick={()=>{compra(album)}} className='bg-transparent border border-zinc-50 px-3 py-1 rounded text-white'>Comprar</button>
                    </div>
                </>:null 
              ))
            }
            
          </>:<>
            {
              discos.map((album) => (
                <div key={album.id} onClick={()=>{discModal(album)}} className='w-72 h-96  hover:border hover:border-zinc-50 p-2'>
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
