interface IQueryKeysConfig {
  devices: {
    relationKey: string;
    queryKey: string;
  };
  deviceSettings: {
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
  singleRoom: {
    relationKey: string;
    queryKey: string;
  };
  roomsNavigation: {
    queryKey: string;
  };
}

const queryKeysConfig: IQueryKeysConfig = {
  devices: {
    relationKey: 'device',
    queryKey: 'devices',
  },
  deviceSettings: {
    relationKey: 'device',
    queryKey: 'deviceSettings',
  },
  alLDeviceTypes: {
    relationKey: 'device_type',
    queryKey: 'allDeviceTypes',
  },
  rooms: {
    relationKey: 'rooms',
    queryKey: 'rooms',
  },
  singleRoom: {
    relationKey: 'rooms',
    queryKey: 'singleRoom',
  },
  roomsNavigation: {
    queryKey: 'roomsNavigation',
  },
};
export { queryKeysConfig };
