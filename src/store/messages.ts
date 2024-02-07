import { create, State } from 'zustand';

interface Message {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface MessagesStore extends State {
  messages: Message[];
  addMessage: (message: Message) => void;
  loadMessages: (messages: Message[]) => void;
  addSingleMessage: (message: Message) => void;
}

const useMessagesStore = create<MessagesStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, { ...message, id: state.messages.length + 1 }],
    })),
  loadMessages: (messages) => set(() => ({ messages })),
  addSingleMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));

export const messagesActions = (set: (state: MessagesStore) => void) => ({
  addMessage: (message: Message) =>
    set((state) => ({
      messages: [...state.messages, { ...message, id: state.messages.length + 1 }],
    })),
  loadMessages: (messages: Message[]) => set(() => ({ messages })),
  addSingleMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
});

export default useMessagesStore;