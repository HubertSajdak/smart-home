interface IDeviceTypeCardOptions {
  id: number;
  label: string;
  deviceTypeId: number;
  iconName: 'Monitor' | 'LightBulb' | 'HomeHealth' | 'GridView';
}

export const addDeviceCardsConfig: IDeviceTypeCardOptions[] = [
  {
    id: 0,
    label: 'media',
    deviceTypeId: 2,
    iconName: 'Monitor',
  },
  {
    id: 1,
    label: 'lights',
    deviceTypeId: 4,
    iconName: 'LightBulb',
  },
  {
    id: 2,
    label: 'security',
    deviceTypeId: 1,
    iconName: 'HomeHealth',
  },
  {
    id: 3,
    label: 'temperature',
    deviceTypeId: 3,
    iconName: 'GridView',
  },
];
