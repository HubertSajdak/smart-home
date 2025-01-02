import { create } from 'zustand';

interface ILightDeviceSettings {
  light_color: number;
  light_intensity: number;
}

interface ITemperatureDeviceSettings {
  temperature: number;
}

interface IMediaDeviceSettings {
  channel: number;
  volume: number;
}

export type TDeviceSettings = ILightDeviceSettings | ITemperatureDeviceSettings | IMediaDeviceSettings | null;

interface IDeviceSettingsStore {
  selectedDeviceId: number | null;
  isSettingsWindowOpen: boolean;
  setSettingsWindowOpen: (
    selectedDeviceId: number | null,
    isSettingsWindowOpen: boolean,
    selectedDeviceTypeId: number | null,
    selectedDeviceName: string,
    isSelectedDeviceOn: boolean,
    selectedDeviceSettings: TDeviceSettings,
    selectedDeviceRoomAssignmentId: number | null
  ) => void;
  selectedDeviceTypeId: number | null;
  selectedDeviceName: string;
  isSelectedDeviceOn: boolean;
  selectedDeviceSettings: TDeviceSettings;
  selectedDeviceRoomAssignmentId: number | null;
}

const useDeviceSettingsStore = create<IDeviceSettingsStore>((set) => ({
  isSettingsWindowOpen: false,
  selectedDeviceTypeId: null,
  selectedDeviceName: '',
  isSelectedDeviceOn: false,
  selectedDeviceId: null,
  selectedDeviceSettings: null,
  selectedDeviceRoomAssignmentId: null,
  setSettingsWindowOpen: (
    selectedDeviceId,
    isSettingsWindowOpen,
    selectedDeviceTypeId,
    selectedDeviceName,
    isSelectedDeviceOn,
    selectedDeviceSettings,
    selectedDeviceRoomAssignmentId
  ) =>
    set({
      selectedDeviceId: selectedDeviceId,
      isSettingsWindowOpen: isSettingsWindowOpen,
      selectedDeviceTypeId: selectedDeviceTypeId,
      selectedDeviceName: selectedDeviceName,
      isSelectedDeviceOn: isSelectedDeviceOn,
      selectedDeviceSettings: selectedDeviceSettings,
      selectedDeviceRoomAssignmentId: selectedDeviceRoomAssignmentId,
    }),
}));

export { useDeviceSettingsStore };
