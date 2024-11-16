import { supabaseSmartHome } from '@smart-home/shared/supabase/db';
import { queryKeysConfig } from '@smart-home/shared/utils/react-query';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { allDevicesDto } from './all-devices-by-room-dto';

interface IDeviceTypes {
  id: number;
  type: string;
}

export async function getAllDevice(deviceTypeId: number) {
  if (deviceTypeId !== 0) {
    const { data } = await supabaseSmartHome
      .from(queryKeysConfig.allDevices.relationKey)
      .select()
      .eq('device_type_id', deviceTypeId);
    return allDevicesDto(data);
  }
  const { data } = await supabaseSmartHome.from(queryKeysConfig.allDevices.relationKey).select();
  return allDevicesDto(data);
}

export function useGetAllDevices(deviceTypeId: number) {
  return useQuery({
    queryKey: [queryKeysConfig.allDevices.queryKey, deviceTypeId],
    queryFn: () => getAllDevice(deviceTypeId),
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
  deviceConfig,
  deviceTypeId,
  roomAssignmentId,
}: {
  deviceName: string;
  deviceConfig: null;
  deviceTypeId: number;
  roomAssignmentId: number;
}) {
  const { error } = await supabaseSmartHome.from(queryKeysConfig.allDevices.relationKey).insert({
    device_name: deviceName,
    device_config: deviceConfig,
    device_type_id: deviceTypeId,
    room_assignment_id: roomAssignmentId,
  });
  return error;
}

export function useAddDevice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      deviceName,
      deviceConfig,
      deviceTypeId,
      roomAssignmentId,
    }: {
      deviceName: string;
      deviceConfig: null;
      deviceTypeId: number;
      roomAssignmentId: number;
    }) =>
      addDevice({
        deviceName,
        deviceConfig,
        deviceTypeId,
        roomAssignmentId,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [queryKeysConfig.allDevices.queryKey] });
    },
  });
}
