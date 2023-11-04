import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { UserState } from './type'

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: {
                id: 0,
                name: '',
                surname: '',
                userName: '',
                emailAddress: '',
                isSeller: false,
                isBuyer: false,
            },
            setUser: (userData) => set(() => ({ user: userData })),
        }),
        {
            name: 'userStore',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useUserStore
