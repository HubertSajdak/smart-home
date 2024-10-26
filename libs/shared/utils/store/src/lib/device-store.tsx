import { create } from 'zustand';

interface IDeviceStore {
  queryParams: { deviceTypeId: number };
  updateDeviceTypeIdParam: (deviceType: number) => void;
}

const useDeviceStore = create<IDeviceStore>((set) => ({
  queryParams: {
    deviceTypeId: 0,
  },
  updateDeviceTypeIdParam: (deviceType) =>
    set({
      queryParams: {
        deviceTypeId: deviceType,
      },
    }),
}));
export { useDeviceStore };
