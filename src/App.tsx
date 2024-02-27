import Card from './components/Card.tsx'
import Hero from './components/Hero.tsx'
import { useAppStore } from './store/AppStore.js'
function App() {
  const { imgsUrl } = useAppStore(state => state)
  console.log(imgsUrl);
  
  return (
    <>
      <div className='[]'>
        <Hero />
        <main className='dark:bg-[#1b1514] bg-zinc-50 grid place-content-center sm:grid-cols-2 md:grid-cols-1 md:place-items-center gap-4 gap-y-8 py-4'>
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
