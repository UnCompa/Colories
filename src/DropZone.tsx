import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaFileMedical, FaFileCircleCheck } from 'react-icons/fa6'
function MyDropzone({ setImgUrl }: any): JSX.Element {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                setImgUrl(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(file);
            
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
        <div {...getRootProps()} className={isDragActive ? "bg-zinc-100 border-4 border-green-500 border-dashed m-4 h-52 flex flex-col items-center justify-center" : "bg-zinc-100 border-2 border-gray-500 border-dashed m-4 h-52 flex flex-col items-center justify-center"}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className='flex flex-col items-center justify-center'>
                        <FaFileCircleCheck className='text-7xl text-green-500 opacity-50' />
                        <p className='text-center py-4 text-green-700'>Suelta tu archivo</p>
                    </div> :
                    <div className='flex flex-col items-center justify-center'>
                        <FaFileMedical className='text-7xl text-gray-500 opacity-50' />
                        <h2 className='font-OverPass text-3xl text-gray-900 py-2 font-bold'>Arrastra aqui</h2>
                        <p className='text-center text-gray-700'>Toca o arrastra tus archivos aqui</p>
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