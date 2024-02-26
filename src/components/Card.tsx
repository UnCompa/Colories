import { Color, Palette } from 'color-thief-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Toaster, toast } from 'sonner'
function Card({ item, index }) {
  type item = string
  type index = number
  return (
    <div key={index} className='bg-zinc-50 rounded shadow-2xl h-max w-max flex p-4'>
      <img src={item} alt="" className='rounded' />
      <div className='h-full flex flex-col'>
        <section className='p-4 m-2'>
          <Color src={item} format="hex">
            {({ data }) => (
              <div className='flex items-center justify-center gap-4'>
                <div className="h-12 w-12 p-4 rounded-full" style={{ background: data }}>
                </div>
                <div>
                  <Toaster expand={true} />
                  <CopyToClipboard text={data ? data[0] : "No hay"} onCopy={() => toast("Hola")}>
                    <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data : "No found"}</button>
                  </CopyToClipboard >
                </div>
              </div>
            )}
          </Color>
        </section>
        <section className='flex m-2'>
          <Palette src={item} colorCount={6} format="hex">
            {({ data }) => {
              console.log(data);
              return (
                <>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[0] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[0] : "No hay"} onCopy={() => toast("Hola")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data[0] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[1] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[1] : "No hay"} onCopy={() => toast("Hola")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data[1] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'> 
                    <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[2] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[2] : "No hay"} onCopy={() => toast("Hola")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data[2] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[3] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[3] : "No hay"} onCopy={() => toast("Hola")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data[3] : "No found"}</button>
                    </CopyToClipboard >
                  </div>
                  <div className='flex flex-col gap-2 p-2 items-center justify-center'>
                    <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[4] : "transparent" }}></div>
                    <Toaster expand={true} />
                    <CopyToClipboard text={data ? data[4] : "No hay"} onCopy={() => toast("Hola")}>
                      <button className='bg-zinc-50 rounded p-1 text-center shadow-md hover:bg-zinc-200 transition-colors'>{data ? data[4] : "No found"}</button>
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