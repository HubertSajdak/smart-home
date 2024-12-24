import { create } from 'zustand';

interface IDeviceSettingsStore {
  isSettingsWindowOpen: boolean;
  setSettingsWindowOpen: (open: boolean, deviceType: number | null, deviceName: string, isOn: boolean) => void;
  deviceTypeId: number | null;
  deviceName: string;
  isSelectedDeviceOn: boolean;
}

const useDeviceSettingsStore = create<IDeviceSettingsStore>((set) => ({
  isSettingsWindowOpen: false,
  deviceTypeId: null,
  deviceName: '',
  isSelectedDeviceOn: false,
  setSettingsWindowOpen: (open: boolean, deviceType: number | null, deviceName: string, isSelectedDeviceOn: boolean) =>
    set({
      isSettingsWindowOpen: open,
      deviceTypeId: deviceType,
      deviceName: deviceName,
      isSelectedDeviceOn: isSelectedDeviceOn,
    }),
}));

export { useDeviceSettingsStore };
