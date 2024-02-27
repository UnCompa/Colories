
import MyDropzone from "../DropZone";
import {useAppStore} from '../store/AppStore.js'

function Hero() {
    const { setImgUrl } = useAppStore(state => state)

    return (
        <>
            <div className="bg-zinc-50 shadow-lg h-[80vh] w-full flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 via-green-500 to-sky-500">Colories</h1>
                <p className="text-xl py-4 text-gray-600 text-center">Sube tus imagenes y obten una paleta de colores!!</p>
                <div className="w-[90%] bg-white shadow m-4">
                    <MyDropzone setImgUrl={setImgUrl} />
                </div>
            </div>
        </>

    )
}

export default Hero