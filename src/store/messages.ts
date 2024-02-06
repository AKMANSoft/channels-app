import { create } from 'zustand';

interface MessagesStore {
  messages: string[];
  addMessage: (message: string) => void;
}

const useMessagesStore = create<MessagesStore>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));

export const messagesActions = (set: (state: MessagesStore) => void) => ({
  addMessage: (message: string) => set((state) => ({ messages: [...state.messages, message] })),
});

export default useMessagesStore;
