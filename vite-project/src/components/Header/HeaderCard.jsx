import add from '/src/assets/add2.svg'
import minus from '/src/assets/remove.svg'
import trash from '/src/assets/trash.svg'


export default function HeaderCard({ setNumber, setValorTotal, discos, compra }) {
  
    function removeOne(disco) {
        setValorTotal((valorTotal) => valorTotal - disco.price);
        setNumber((number) => number - 1);
        disco.stock -= 1;
    }
  
    function trashFuncSelf(disco) {
        const stock = disco.stock
        const remove = stock * disco.price;
        setValorTotal((valorTotal) => valorTotal - remove);
        setNumber((prev) => prev - stock);
        disco.stock = 0;
    }
  
    return (
      <>
        {discos.map((disco) => {
          if (disco.stock !== 0) {
            return (
              <div key={disco.id} className="flex flex-row h-fit p-3 hover:border hover:border-zinc-50"> 
                <div>
                  <img className="w-40 object-cover" src={disco.coverImage} alt={disco.title} />
                </div>
                <div className="min-w-60 max-w-60 flex p-2 flex-col justify-between">
                  <div>
                    <div className="flex flex-row justify-between">
                      <h2 className="font-bold">{disco.title}</h2>
                      <img className="w-6" onClick={() => trashFuncSelf(disco)} src={trash} alt="Trash" />
                    </div>
                    <p>{disco.artist}</p>
                  </div>
                  <div className="flex flex-row justify-between gap-24">
                    <div className="flex flex-row gap-2">
                      <button onClick={() => removeOne(disco)}>
                        <img src={minus} className="w-6" alt="Minus" />
                      </button>
                      <p>{disco.stock}</p>
                      <button onClick={() => compra(disco)}>
                        <img src={add} className="w-6" alt="Add" />
                      </button>
                    </div>
                    <p>${disco.price * disco.stock}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </>
    );
  }
  