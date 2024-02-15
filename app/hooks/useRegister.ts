import {create } from 'zustand'

interface RegisterState {
    isOpen: boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useRegister = create<RegisterState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegister