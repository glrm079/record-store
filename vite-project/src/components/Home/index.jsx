import HomeCard from "./HomeCard"

export default function Home({pesquisa, discos, compra,setPageInfo} ){
   return(
    <div className='flex flex-wrap justify-center gap-3 m-5 text-zinc-50 mt-24'>
        {pesquisa !== ""?<>
            {
                discos.map((disco) => (
                    <>
                        {
                             disco.artist.toLowerCase().includes(pesquisa.toLowerCase()) || disco.title.toLowerCase().includes(pesquisa.toLowerCase())   ?<>
                             <HomeCard buyButton={buyButton} disco={disco} compra={compra} setPageInfo={setPageInfo}/>
                          </>:null 
                        }
                    </>
                ))
            }
            
            </>:<>
            {
                discos.map((disco) => (
                    <>
                       <HomeCard disco={disco} compra={compra} setPageInfo={setPageInfo}/>
                    </>
                ))
            }
            </>
        }
    </div>
   )
}