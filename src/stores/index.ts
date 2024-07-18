import { create } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
  id: 'app',
})

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value)
  },
  getItem: (name) => {
    const value = storage.getString(name)
    return value ?? null
  },
  removeItem: (name) => {
    return storage.delete(name)
  },
}

type PersistStoreState = {
  authUser: null | {}
  theme: string
  setAuthUser: (data: {}) => void
  removeAuthUser: () => void
  setTheme: (data: string) => void
}

export const usePersistStore = create(
  persist<PersistStoreState>(
    (set, get) => ({
      authUser: null,
      theme: 'dark',
      setAuthUser: (data: any) => set((state) => ({ authUser: data })),
      removeAuthUser: () => set({ authUser: null }),
      setTheme: (data: any) => set((state) => ({ theme: data })),
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
)
