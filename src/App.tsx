import { useState } from "react";
import MyDropzone from "./DropZone"
import { Color, Palette } from 'color-thief-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Toaster, toast } from 'sonner'
function App() {
  const [imageURL, setImageURL]: any = useState<string[]>([]);
  return (
    <>
      <div>
        <h1>Hola 2</h1>
        <MyDropzone setImageURL={setImageURL} />
        {
          imageURL.map((item: string, index: number) => (
            <div key={index}>
              <img src={item} alt="" />
              <Color src={item} format="hex">
                {({ data }) => (
                  <div className="h-12 w-12 p-4 rounded-full" style={{ background: data }}>
                  </div>
                )}
              </Color>
              <Palette src={item} colorCount={6} format="hex">
                {({ data }) => {
                  console.log(data);
                  return (
                    <>
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[0] : "transparent" }}></div>
                      <Toaster expand={true} />
                      <CopyToClipboard text={data ? data[0] : "No hay"} onCopy={() => toast("Hola")}>
                        <button>{data ? data[0] : "No found"}</button>
                      </CopyToClipboard >
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[1] : "transparent" }}></div>
                      <span>{data ? data[1] : "No found"}</span>
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[2] : "transparent" }}></div>
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[3] : "transparent" }}></div>
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[4] : "transparent" }}></div>
                      <div className="h-12 w-12 p-4 rounded-full border border-black" style={{ backgroundColor: data ? data[5] : "transparent" }}></div>
                    </>
                  )
                }}
              </Palette>
            </div>
          ))
        }
      </div >
    </>
  )
}

export default App
