import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { AuthState } from "./type";

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (authUser) => set(() => ({ user: authUser })),
      accessToken: null,
      setAccessToken: (token) => set(() => ({ accessToken: token })),
      clearAccessToken: () => {
        set(() => ({ accessToken: null }));
        localStorage.removeItem("authStore");
      },
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
