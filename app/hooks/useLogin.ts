import {create } from 'zustand'

interface LoginState {
    isOpen: boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useRegister = create<LoginState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegister