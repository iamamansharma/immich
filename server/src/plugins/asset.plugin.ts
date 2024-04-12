import { Plugin } from 'src/interfaces/plugin.interface';

export const plugin: Plugin = {
  version: 1,
  id: 'immich-plugin-asset',
  name: 'Asset Plugin',
  description: 'Immich asset plugin',
  actions: [
    {
      id: 'asset.favorite',
      name: '',
      description: '',
      onAction: () => {
        console.log('Favorite');
      },
    },
    {
      id: 'asset.unfavorite',
      name: '',
      description: '',
      onAction: () => {
        console.log('Unfavorite');
      },
    },
    {
      id: 'asset.archive',
      name: '',
      description: '',
      onAction: () => {
        console.log('Archive');
      },
    },
    {
      id: 'asset.unarchive',
      name: '',
      description: '',
      onAction: () => {
        console.log('Unarchive');
      },
    },
  ],
};
