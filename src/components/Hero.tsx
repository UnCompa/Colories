
import MyDropzone from "../DropZone";
import {useAppStore} from '../store/AppStore.js'

function Hero() {
    const { setImgUrl } = useAppStore(state => state)

    return (
        <>
            <div className="dark:bg-[#25252d] bg-zinc-50 shadow-lg h-[80vh] w-full flex flex-col items-center justify-center">
                <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 via-green-500 to-sky-500">Colories</h1>
                <p className="text-xl py-4 dark:text-gray-50 text-gray-600 text-center">Sube tus imagenes y obten una paleta de colores!!</p>
                <div className="w-[90%] dark:bg-[#4a5769] dark:active:bg-[#343d4a] active:bg-zinc-200 bg-white m-4 rounded-md shadow-2xl">
                    <MyDropzone setImgUrl={setImgUrl} />
                </div>
            </div>
        </>

    )
}

export default Hero