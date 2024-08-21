export default function HomeCard({disco,compra,setPageInfo}){
    return (
        <div  key={disco.id} className='w-5/6 sm:w-72 h-96 hover:border hover:border-zinc-50 p-2'>
            <img onClick={()=>{setPageInfo(disco)}} src={disco.coverImage} alt={disco.title} className='w-full object-cover'/>
            <h2 className='font-extrabold text-sm'>{disco.title} </h2>
            <div className='flex flex-row justify-between'>
            <p>{disco.artist}</p>
            <p><strong>$</strong> {disco.price}</p>
            </div>
            <button onClick={()=>{compra(disco)}} className=' w-24 bg-transparent border border-zinc-50 px-3 py-1 rounded text-white'>Comprar</button>
              
            
        </div>
    )
}