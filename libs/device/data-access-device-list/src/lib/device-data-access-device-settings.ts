import { supabaseSmartHome } from '@smart-home/shared/supabase/db';
import { queryKeysConfig } from '@smart-home/shared/utils/react-query';
import { TDeviceSettings } from '@smart-home/shared/utils/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';

async function updateDeviceSettings({
  deviceId,
  deviceSettings,
}: {
  deviceId: number;
  deviceSettings: TDeviceSettings;
}) {
  const { error } = await supabaseSmartHome
    .from(queryKeysConfig.deviceSettings.relationKey)
    .update({
      device_settings: deviceSettings,
    })
    .eq('id', deviceId);
  return error;
}

export function useUpdateDeviceSettings() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ deviceId, deviceSettings }: { deviceId: number; deviceSettings: TDeviceSettings }) => {
      await updateDeviceSettings({ deviceId, deviceSettings });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKeysConfig.devices.queryKey],
      });
    },
  });
}

async function updateDeviceRoomAssignment({
  deviceId,
  roomAssignmentId,
}: {
  deviceId: number;
  roomAssignmentId: number;
}) {
  const { error } = await supabaseSmartHome
    .from(queryKeysConfig.deviceSettings.relationKey)
    .update({
      room_assignment_id: roomAssignmentId,
    })
    .eq('id', deviceId);
  return error;
}

export function useUpdateDeviceRoomAssignment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ deviceId, roomAssignmentId }: { deviceId: number; roomAssignmentId: number }) => {
      await updateDeviceRoomAssignment({ deviceId, roomAssignmentId });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKeysConfig.devices.queryKey],
      });
    },
  });
}
