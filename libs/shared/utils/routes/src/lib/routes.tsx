export const routes = {
  device: {
    list: {
      url: '/',
      path: () => '/',
    },
  },
  settings: {
    url: '/settings',
    path: () => '/settings',
  },
  room: {
    url: '/room/:id',
    path: (id: number) => '/room/:id'.replace(':id', id.toString()),
  },
};
