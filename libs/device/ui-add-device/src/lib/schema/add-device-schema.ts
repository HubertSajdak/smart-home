import { z } from 'zod';

export const addDeviceSchema = z.object({
  deviceTypeId: z.number().gte(0),
  deviceName: z.string().min(3),
  roomAssignmentId: z.number().gte(0),
  deviceConfig: z.null(),
});
export type TAddDeviceFormFields = z.infer<typeof addDeviceSchema>;
