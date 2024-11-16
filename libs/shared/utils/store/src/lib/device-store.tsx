import { create } from 'zustand';

interface IDeviceStore {
  queryParams: { deviceTypeId: number };
  deviceListDisplayType: 'grid' | 'row';
  updateDeviceTypeIdParam: (deviceType: number) => void;
  changeDeviceListDisplayType: (displayType: 'grid' | 'row') => void;
}

const useDeviceStore = create<IDeviceStore>((set) => ({
  queryParams: {
    deviceTypeId: 0,
  },
  deviceListDisplayType: 'grid',
  updateDeviceTypeIdParam: (deviceType) =>
    set({
      queryParams: {
        deviceTypeId: deviceType,
      },
    }),
  changeDeviceListDisplayType: (displayType: 'grid' | 'row') =>
    set({
      deviceListDisplayType: displayType,
    }),
}));
export { useDeviceStore };
