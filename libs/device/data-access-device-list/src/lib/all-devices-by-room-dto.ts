interface ILightDeviceSettings {
  light_color: string;
  light_intensity: string;
}

interface ITemperatureDeviceSettings {
  temperature: number;
}

interface IMediaDeviceSettings {
  channel: number;
  volume: number;
}

export type TDeviceSettings = ILightDeviceSettings | ITemperatureDeviceSettings | IMediaDeviceSettings | null;

interface IDevice {
  id: number;
  is_on: boolean;
  device_name: string;
  device_type_id: number;
  device_settings: TDeviceSettings | null;
  room_assignment_id: number;
}

interface IDeviceDto {
  id: number;
  isOn: boolean;
  deviceName: string;
  deviceTypeId: number;
  deviceSettings: TDeviceSettings | null;
  roomAssignmentId: number;
}

export const allDevicesDto = (data: IDevice[] | null): IDeviceDto[] | null => {
  return (
    data &&
    data.map((device) => {
      return {
        id: device.id,
        deviceTypeId: device.device_type_id,
        deviceName: device.device_name,
        deviceSettings: device.device_settings,
        roomAssignmentId: device.room_assignment_id,
        isOn: device.is_on,
      };
    })
  );
};
export type { IDevice, IDeviceDto };
