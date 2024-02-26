import { useState } from "react";
import MyDropzone from "./DropZone"
import Hero from './components/Hero.tsx'
import Card from "./components/Card.tsx";
function App() {
  const [imageURL, setImageURL]: any = useState<string[]>([]);
  return (
    <>
      <div className="font-OverPass">
        <Hero/>
        <MyDropzone setImageURL={setImageURL} />
        {
          imageURL.map((item: string, index: number) => (
            <Card item={item} index={index}/>
          ))
        }
      </div >
    </>
  )
}

export default App
