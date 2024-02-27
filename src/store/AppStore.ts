import { create } from 'zustand';

interface AppState {
    imgsUrl: string[];
    setImgUrl: (img: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    imgsUrl: [],
    
    setImgUrl: (img) => {
        console.log(img)
        set((state) => ({ imgsUrl: [...state.imgsUrl, img] }))
    },
}));
