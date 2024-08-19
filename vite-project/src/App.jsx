import './App.css'
import { useState } from "react"
import Header from './components/Header/index.jsx'
import discos from './data/discos.json'
import Home from './components/Home/index.jsx'
import DiscoPage from './components/DiscoPage/index.jsx'


function App() {
  const [number,setNumber] = useState(0)
  const [valorTotal,setValorTotal] = useState(0)
  const [pesquisa,setPesquisa] = useState("")
  const[pageInfo,setPageInfo] = useState("")
  const [buyModal,setBuyModal] = useState(false)

  function compra(discoF){
    discos.forEach((disco)=>{
      if(discoF.id === disco.id){
        setNumber(number => number += 1)
        setValorTotal(valorTotal => valorTotal += disco.price)
        disco.stock += 1
        setBuyModal(true)
        setTimeout(()=>{
          setBuyModal(false)
        },1500)
      }
    })
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
      {
        buyModal === true?<>
          <div className='fixed top-24 left-1/2 transform -translate-x-1/2 text-zinc-50 animated-background border border-zinc-50 w-80 h-12 rounded flex justify-center items-center'>
            <p>Item Adicionado ao carrinho!</p>
          </div>


        </>:null
      }
      {
        pageInfo !== ""?<>
          <DiscoPage
                pageInfo={pageInfo}
                setPageInfo={setPageInfo}
                compra={compra}
            />
        </>:<>
        <Home
          pesquisa={pesquisa}
          discos={discos}
          compra={compra}
          setPageInfo={setPageInfo}
        />
        </>
      }
       <hr className='ml-auto mr-auto' />
      <footer className='animated-background p-10'>
        <div className='flex justify-center items-center gap-2 text-zinc-50'><p>© 2024 - Record Store Todos direitos reservados. | Desenvolvido por:</p><a href="github.com/glrm_079">Guilherme Oliveira</a></div>
      </footer>
    </>
  )
}

export default App
