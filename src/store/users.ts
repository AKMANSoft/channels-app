import { create } from 'zustand';

interface UsersStore {
  users: string[];
  addUser: (user: string) => void;
}

const useUsersStore = create<UsersStore>((set) => ({
    users: [],
    addUser: (user) => set((state) => ({ users: [...state.users, user] })),
}));

export const usersActions = (set: (state: UsersStore) => void) => ({
    addUser: (user: string) => set((state) => ({ users: [...state.users, user] })),
});

export default useUsersStore;
