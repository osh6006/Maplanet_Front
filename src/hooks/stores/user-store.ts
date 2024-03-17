import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SelectorHook } from './store';

export interface UserInfo {
  nickName: string;
  avatarUrl: string;
}

interface IUserState {
  userInfo: UserInfo | null;

  actions: {
    logIn: (userInfo: UserInfo) => void;
    logOut: () => void;
  };
}

export const useUserStore = create<IUserState>()(
  persist(
    (set) => ({
      userInfo: null,
      actions: {
        logIn: (userInfo) =>
          set((state) => {
            return { ...state, userInfo };
          }),
        logOut: () =>
          set((state) => {
            return { ...state, userInfo: null };
          })
      }
    }),
    {
      name: 'user-info' // name of the item in the storage (must be unique)
    }
  )
);

export const useUser: SelectorHook<IUserState, 'userInfo'> = (
  selector = (state: IUserState) => state.userInfo
) => useUserStore(selector);

export const useUserActions = () => useUserStore((state) => state.actions);
