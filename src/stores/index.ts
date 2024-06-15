import { create } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
  id: 'myapp',
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

export const useAuthStore = create(
  persist(
    (set, get) => ({
      authUser: null,
      setAuthUser: (data: any) => set((state) => ({ authUser: data })),
      removeAuthUser: () => set({ authUser: null }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
)
