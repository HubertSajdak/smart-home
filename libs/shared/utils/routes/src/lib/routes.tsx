export const routes = {
  device: {
    list: {
      url: '/device-list',
      path: () => 'device-list',
    },
  },
  settings: {
    url: '/settings',
    path: () => 'settings',
  },
  room: {
    url: '/room/:id',
    path: (id: number) => '/room/:id'.replace(':id', id.toString()),
  },
};
