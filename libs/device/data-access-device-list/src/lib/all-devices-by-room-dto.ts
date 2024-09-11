interface IDevice {
  id: number;
  is_on: boolean;
  device_name: string;
  device_type: number;
}

interface IDeviceDto {
  id: number;
  isOn: boolean;
  deviceName: string;
  deviceType: number;
}

interface IDevicesByRoom {
  id: number;
  label: string;
  all_devices: IDevice[] | [];
}

interface IDevicesByRoomDto {
  id: number;
  label: string;
  allDevices: IDeviceDto[] | [] | null;
}

export const allDevicesByRoomDto = (data: IDevicesByRoom[] | null): IDevicesByRoomDto[] | null =>
  data &&
  data.map((el) => {
    return {
      id: el.id,
      label: el.label,
      allDevices: el.all_devices.map((device) => {
        return {
          id: device.id,
          deviceType: device.device_type,
          deviceName: device.device_name,
          isOn: device.is_on,
        };
      }),
    };
  });
export type { IDevicesByRoom, IDevicesByRoomDto };
