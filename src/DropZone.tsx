import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaArrowUpFromBracket, FaRegCircleCheck } from 'react-icons/fa6'
function MyDropzone({ setImageURL }: any): JSX.Element {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {

                setImageURL((prevState: string) => [...prevState, reader.result]);
            };
            reader.readAsDataURL(file);
        })
    }, []);

    const { isDragActive, getInputProps, getRootProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
        },
        multiple: true,
        onDrop: onDrop
    })

    return (
        <div {...getRootProps()} className={isDragActive ? "bg-zinc-100 border-4 border-green-500 border-dashed m-4 h-52 flex flex-col items-center justify-center" : "bg-zinc-100 border-4 border-sky-500 border-dashed m-4 h-52 flex flex-col items-center justify-center"}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className='flex flex-col items-center justify-center'>
                        <FaRegCircleCheck className='text-7xl text-green-500 opacity-50' />
                        <p className='text-center py-4 text-green-700'>Suelta tu archivo</p>
                    </div> :
                    <div className='flex flex-col items-center justify-center'>
                        <FaArrowUpFromBracket className='text-5xl text-sky-500 opacity-50' />
                        <p className='text-center py-4 text-sky-700'>Toca o arrastra tus archivos aqui</p>
                    </div>
            }
        </div>
    )
}

/* const dropzoneStyles: React.CSSProperties = {
    border: '2px dashed #0087F7',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
}; */

export default MyDropzone;