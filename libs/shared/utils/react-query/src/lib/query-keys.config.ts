interface IQueryKeysConfig {
  allDevices: {
    relationKey: string;
    queryKey: string;
  };
  alLDeviceTypes: {
    relationKey: string;
    queryKey: string;
  };
  rooms: {
    relationKey: string;
    queryKey: string;
  };
  roomsNavigation: {
    queryKey: string;
  };
}

const queryKeysConfig: IQueryKeysConfig = {
  allDevices: {
    relationKey: 'device',
    queryKey: 'allDevices',
  },
  alLDeviceTypes: {
    relationKey: 'device_type',
    queryKey: 'allDeviceTypes',
  },
  rooms: {
    relationKey: 'rooms',
    queryKey: 'rooms',
  },
  roomsNavigation: {
    queryKey: 'roomsNavigation',
  },
};
export { queryKeysConfig };
