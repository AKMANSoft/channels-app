import { messagesActions, useMessagesStore } from './messages';
import { channelsActions, useChannelsStore } from './channels';
import { usersActions, useUsersStore } from './users';
import { create } from 'zustand';

export const useStore = create((set) => ({
  ...messagesActions(set),
  ...channelsActions(set),
  ...usersActions(set),
}));

// export { useMessagesStore, useChannelsStore, useUsersStore };
