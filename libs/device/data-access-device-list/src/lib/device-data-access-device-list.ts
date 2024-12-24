import { supabaseSmartHome } from '@smart-home/shared/supabase/db';
import { queryKeysConfig } from '@smart-home/shared/utils/react-query';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { allDevicesDto } from './all-devices-by-room-dto';

interface IDeviceTypes {
  id: number;
  type: string;
}

export async function getRoomDevices(roomId: number, deviceTypeId?: number) {
  if (deviceTypeId !== 0) {
    const { data } = await supabaseSmartHome
      .from(queryKeysConfig.devices.relationKey)
      .select()
      .eq('room_assignment_id', roomId)
      .eq('device_type_id', deviceTypeId)
      .order('created_at');
    return allDevicesDto(data);
  }
  const { data } = await supabaseSmartHome
    .from(queryKeysConfig.devices.relationKey)
    .select()
    .eq('room_assignment_id', roomId)
    .order('created_at');
  return allDevicesDto(data);
}

export function useGetRoomDevices(roomId: number) {
  const deviceTypeId = useDeviceStore((state) => state.queryParams.deviceTypeId);
  return useQuery({
    queryKey: [queryKeysConfig.devices.queryKey, roomId, deviceTypeId],
    queryFn: () => getRoomDevices(roomId, deviceTypeId),
  });
}

async function getAllDeviceTypes(): Promise<IDeviceTypes[] | null> {
  const { data } = await supabaseSmartHome.from(queryKeysConfig.alLDeviceTypes.relationKey).select().order('id');
  return data;
}

export function useGetAllDeviceTypes() {
  return useQuery({ queryKey: [queryKeysConfig.alLDeviceTypes.queryKey], queryFn: () => getAllDeviceTypes() });
}

async function addDevice({
  deviceName,
  deviceSettings,
  deviceTypeId,
  roomAssignmentId,
}: {
  deviceName: string;
  deviceSettings: null;
  deviceTypeId: number;
  roomAssignmentId: number;
}) {
  const { error } = await supabaseSmartHome.from(queryKeysConfig.devices.relationKey).insert({
    device_name: deviceName,
    device_settings: deviceSettings,
    device_type_id: deviceTypeId,
    room_assignment_id: roomAssignmentId,
  });
  return error;
}

export function useAddDevice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      deviceName,
      deviceSettings,
      deviceTypeId,
      roomAssignmentId,
    }: {
      deviceName: string;
      deviceSettings: null;
      deviceTypeId: number;
      roomAssignmentId: number;
    }) =>
      await addDevice({
        deviceName,
        deviceSettings,
        deviceTypeId,
        roomAssignmentId,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKeysConfig.devices.queryKey],
      });
    },
  });
}

async function updateDevicePowerSettings({
  deviceId,
  isOn,
}: {
  deviceId: number;

  isOn: boolean;
}) {
  const { error } = await supabaseSmartHome
    .from(queryKeysConfig.devices.relationKey)
    .update({
      is_on: isOn,
    })
    .eq('id', deviceId);
  return error;
}

export function useUpdateDevicePowerSettings() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      deviceId,

      isOn,
    }: {
      deviceId: number;
      isOn: boolean;
    }) => {
      await updateDevicePowerSettings({ deviceId, isOn });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKeysConfig.devices.queryKey],
      });
    },
  });
}
