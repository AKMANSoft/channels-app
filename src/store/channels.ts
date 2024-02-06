import { create } from 'zustand';

interface ChannelsStore {
  channels: string[];
  addChannel: (channel: string) => void;
}

const useChannelsStore = create<ChannelsStore>((set) => ({
    channels: [],
    addChannel: (channel) => set((state) => ({ channels: [...state.channels, channel] })),
}));

export const channelsActions = (set: (state: ChannelsStore) => void) => ({
    addChannel: (channel: string) => set((state) => ({ channels: [...state.channels, channel] })),
});

export default useChannelsStore;
