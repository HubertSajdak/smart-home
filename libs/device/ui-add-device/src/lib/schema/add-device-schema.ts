import { z } from 'zod';

export const addDeviceSchema = z.object({
  deviceTypeId: z.number().gte(0, { message: 'addDeviceForm.deviceTypeError' }),
  deviceName: z.string().min(3, { message: 'addDeviceForm.deviceNameError' }),
  roomAssignmentId: z.number({ message: 'addDeviceForm.deviceRoomAssignmentError' }).gte(0),
  deviceSettings: z
    .object({
      light_color: z.number().optional(),
      light_intensity: z.number().optional(),
      channel: z.number().optional(),
      volume: z.number().optional(),
      temperature: z.number().optional(),
    })
    .nullable(),
});
export type TAddDeviceFormFields = z.infer<typeof addDeviceSchema>;
