import { create, State } from "zustand";

interface Channel {
  id: string;
  name: string;
  location: string;
  creatorId: string;
  memberCount: number;
  createdAt: string;
  updatedAt: string;
}

interface ChannelsStore extends State {
  channels: Channel[];
  addMessage: (message: Channel) => void;
  loadChannels: (channels: Channel[]) => void;
}

const useChannelsStore = create<ChannelsStore>((set) => ({
  channels: [],
  addMessage: (message) =>
    set((state) => ({
      channels: [
        ...state.channels,
        { ...message, id: state.channels.length + 1 },
      ],
    })),
  loadChannels: (channels) => set(() => ({ channels })),
  addSingleMessage: (message) =>
    set((state) => ({ channels: [...state.channels, message] })),
}));

export const channelsActions = (set: (state: ChannelsStore) => void) => ({
  addMessage: (message: Channel) =>
    set((state) => ({
      channels: [
        ...state.channels,
        { ...message, id: state.channels.length + 1 },
      ],
    })),
  loadChannels: (channels: Channel[]) => set(() => ({ channels })),
});

export default useChannelsStore;
