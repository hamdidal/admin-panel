import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { DateState } from './type'

const useDateStore = create<DateState>()(
    persist(
        (set) => ({
            startDate: null,
            endDate: null,
            setStartDate: (date) => set(() => ({ startDate: date })),
            setEndDate: (date) => set(() => ({ endDate: date })),
            reset: () => set(() => ({ startDate: null, endDate: null })),
        }),
        {
            name: 'dateStore',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useDateStore
