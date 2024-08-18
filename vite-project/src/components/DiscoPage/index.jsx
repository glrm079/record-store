import xsvg from '/src/assets/close.svg'


export default function DiscoPage({pageInfo,compra,setPageInfo}){
    return(
        <div className="flex flex-row mt-20 z-20">
            <img className='w-10 absolute left-7' src={xsvg} onClick={()=>{setPageInfo("")}} alt="" />
            <div className="w-2/4 p-10">
                <img className='w-full object-cover' src={pageInfo.coverImage} alt="" />
            </div>
            <div className="w-2/4 p-10 text-zinc-50">
                <div className="flex flex-col  w-3/4 h-full gap-7">
                        <h1 className="text-6xl font-bold">{pageInfo.title}</h1>
                        <div className="flex flex-row justify-between">
                            <p className='text-xl font-bold'>{pageInfo.artist}</p>
                            <p className="text-xl font-bold">release: {pageInfo.releaseYear}</p>
                        </div>
                        <p className='text-xl'>{pageInfo.description}</p>
                        <p className='text-4xl text-right mt-20'>Price: ${pageInfo.price}</p>
                    <button onClick={()=>{compra(pageInfo)}} className='bg-transparent border border-zinc-50 w-full h-10 mt-4 self-end'>Comprar</button>
                </div>
            </div>
        </div>
    )
}