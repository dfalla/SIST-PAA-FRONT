import {create} from "zustand";
import { persist } from "zustand/middleware";
import { SafeAny } from "../common";
// import { profileRequest, registerRequest } from "../api";

export interface Profile {
    name?: string;
    lastName?: string;
}

type State = {
    token: string | null;
    profile: Profile;
    isAuth: boolean;
    errors: SafeAny;
};

type Actions = {
    setToken: (token: string) => void;
    setProfile: (profile: Profile) => void;
    logout: () => void;
    cleanErrors: () => void;
};

export const useAuthStore = create(
    persist<State & Actions>(
      (set) => ({
        token: null,
        profile: {},
        isAuth: false,
        errors: null,
        onClose: undefined,
        setToken: ( token: string) =>
          set(() => ({
            token,
            isAuth: !!token,
          })),

        setProfile: (profile: Profile) => {
          set(() => ({
            profile
          }))
        },
        logout: () => set(() => ({ token: null, profile: {}, isAuth: false, onClose: undefined })),
        cleanErrors: () => set(() => ({ errors: null })),
      }),
      {
        name: "auth",
      }
    )
  );


