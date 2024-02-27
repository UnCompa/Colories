import { Color, Palette } from 'color-thief-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Toaster, toast } from 'sonner'
function Card({ item, index }) {
  type item = string
  type index = number
  return (
    <div key={index} className='bg-zinc-50 rounded shadow-2xl h-max w-max flex flex-col md:flex-row p-4'>
      <img src={item} alt="" className='rounded h-56 w-56 object-cover' />
      <div className='h-full flex flex-col'>
        <section className='p-4 m-2'>
          <Color src={item} format="hex">
            {({ data }) => {
              console.log(data);
              return (
                <div className='flex items-center justify-center gap-4'>
                  <div className="h-12 w-12 p-4 rounded-full shadow-2xl" style={{ backgroundColor: data ? data : "No encontrado" }}></div>
                  <div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data : "No hay"} onCopy={() => toast("Copiado al portapapeles")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                </div>
              )
            }}
          </Color>
        </section>
        <section className='flex flex-col md:flex-row'>
          <Palette src={item} colorCount={6} format="hex">
            {({ data }) => {
              const color1 = data ? data[0].toUpperCase() : "No encontrado"
              console.log(color1);
              
              return (
                <>
                  <div className='flex justify-start md:flex-col gap-0 md:gap-2 p-1 items-center md:justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full shadow-xl border-black" style={{ backgroundColor: data ? color1 : "transparent" }}></div>
                    <Toaster />
                    <CopyToClipboard text={data ? color1 : "No encontrado"} onCopy={() => {
                      toast("Copiado al portapapeles")
                      console.log("Copy");
                      
                    }}>
                      <button className='bg-zinc-50 rounded ml-4 p-1 text-center shadow-md hover:bg-zinc-100 hover:translate-y-0.5 transition-all'>{data ? color1 : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex justify-start md:flex-col gap-0 md:gap-2 p-1 items-center md:justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full shadow-xl border-black" style={{ backgroundColor: data ? data[1] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[1] : "No hay"} onCopy={() => toast("Copiado al portapapeles")}>
                      <button className='bg-zinc-50 rounded ml-4 p-1 text-center shadow-md hover:bg-zinc-100 hover:translate-y-0.5 transition-all'>{data ? data[1] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex justify-start md:flex-col gap-0 md:gap-2 p-1 items-center md:justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full shadow-xl border-black" style={{ backgroundColor: data ? data[2] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[2] : "No hay"} onCopy={() => toast("Copiado al portapapeles")}>
                      <button className='bg-zinc-50 rounded ml-4 p-1 text-center shadow-md hover:bg-zinc-100 hover:translate-y-0.5 transition-all'>{data ? data[2] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex justify-start md:flex-col gap-0 md:gap-2 p-1 items-center md:justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full shadow-xl border-black" style={{ backgroundColor: data ? data[3] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[3] : "No hay"} onCopy={() => toast("Copiado al portapapeles")}>
                      <button className='bg-zinc-50 rounded ml-4 p-1 text-center shadow-md hover:bg-zinc-100 hover:translate-y-0.5 transition-all'>{data ? data[3] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex justify-start md:flex-col gap-0 md:gap-2 p-1 items-center md:justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full shadow-xl border-black" style={{ backgroundColor: data ? data[4] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[4] : "No hay"} onCopy={() => toast("Copiado al portapapeles")}>
                      <button className='bg-zinc-50 rounded ml-4 p-1 text-center shadow-md hover:bg-zinc-100 hover:translate-y-0.5 transition-all'>{data ? data[4] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                </>
              )
            }}
          </Palette>
        </section>
      </div>
    </div>
  )
}

export default Card