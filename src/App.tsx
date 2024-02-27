import Card from './components/Card.tsx'
import Hero from './components/Hero.tsx'
import { useAppStore } from './store/AppStore.js'
function App() {
  const { imgsUrl } = useAppStore(state => state)
  console.log(imgsUrl);
  
  return (
    <>
      <div className="font-OverPass">
        <Hero />
        <main className='grid place-content-center sm:grid-cols-2 md:grid-cols-1 md:place-items-center my-4 gap-4'>
          {
            imgsUrl.map((item: string, index: number) => (
              <Card item={item} index={index} />
            ))
          }
        </main>
      </div >
    </>
  )
}

export default App
