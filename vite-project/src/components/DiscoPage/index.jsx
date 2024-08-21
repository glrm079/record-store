import xsvg from '/src/assets/close.svg'


export default function DiscoPage({pageInfo,compra,setPageInfo}){
    return(
        <div className="flex flex-col sm:flex-row  mt-20 z-20">
            <img className='w-10 absolute left-7' src={xsvg} onClick={()=>{setPageInfo("")}} alt="" />
            <div className="w-full sm:w-2/4 flex justify-center p-10">
                <img className='w-96 sm:w-full object-cover' src={pageInfo.coverImage} alt="" />
            </div>

            <div className="w-full p-10 sm:w-2/4 sm:p-10  text-zinc-50 flex justify-center">
                <div className="flex flex-col h-full gap-7  sm:w-3/4">
                        <h1 className="text-3xl sm:text-6xl font-bold">{pageInfo.title}</h1>
                        <div className="flex flex-row justify-between">
                            <p className='text-xl font-bold'>{pageInfo.artist}</p>
                            <p className="text-xl font-bold">release: {pageInfo.releaseYear}</p>
                        </div>
                        <p className='text-xl'>{pageInfo.description}</p>
                        <p className='text-4xl text-right mt-10'>Price: ${pageInfo.price}</p>
                    <button onClick={()=>{compra(pageInfo)}} className='bg-transparent border border-zinc-50 w-full h-10 mt-4 self-end'>Comprar</button>
                </div>
            </div>
        </div>
    )
}