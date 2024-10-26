interface IDeviceConfig {
  light_color?: string;
  temperature?: number;
  channel?: number;
}

interface IDevice {
  id: number;
  is_on: boolean;
  device_name: string;
  device_type_id: number;
  device_config: IDeviceConfig | null;
  room_assignment_id: number;
}

interface IDeviceDto {
  id: number;
  isOn: boolean;
  deviceName: string;
  deviceTypeId: number;
  deviceConfig: IDeviceConfig | null;
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
        deviceConfig: device.device_config,
        roomAssignmentId: device.room_assignment_id,
        isOn: device.is_on,
      };
    })
  );
};
export type { IDevice, IDeviceDto };
