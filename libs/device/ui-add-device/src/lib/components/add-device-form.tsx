import { zodResolver } from '@hookform/resolvers/zod';
import { useAddDevice } from '@smart-home/device/data-access-device-list';
import { useGetRooms } from '@smart-home/device/data-access-room-list';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { addDeviceSchema, TAddDeviceFormFields } from '../schema/add-device-schema';
import { StyledFormContainer } from './add-device-form.styled';
import AddDeviceFormFields from './add-device-form-fields';

export interface IAddDeviceFormProps {
  onSubmitModalClose: () => void;
}

const AddDeviceForm = ({ onSubmitModalClose }: IAddDeviceFormProps) => {
  const { data: rooms } = useGetRooms();
  const { mutate: addDeviceMutation } = useAddDevice();
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TAddDeviceFormFields>({
    defaultValues: {
      deviceTypeId: -1,
      deviceName: '',
      deviceSettings: null,
      roomAssignmentId: -1,
    },
    resolver: zodResolver(addDeviceSchema),
  });
  const deviceTypeIdWatch = watch('deviceTypeId');

  const setDeviceDefaultSettings = useCallback(
    (deviceTypeId: number) => {
      setValue('deviceTypeId', deviceTypeId);
      if (deviceTypeId === 1) {
        setValue('deviceSettings', null);
      }
      if (deviceTypeId === 2) {
        setValue('deviceSettings', { channel: 0, volume: 0 });
      }
      if (deviceTypeId === 3) {
        setValue('deviceSettings', { temperature: 16 });
      }
      if (deviceTypeId === 4) {
        setValue('deviceSettings', { light_color: 100, light_intensity: 1 });
      }
    },
    [setValue]
  );
  const handleRoomChange = useCallback(
    (value: number) => {
      setValue('roomAssignmentId', value);
    },
    [setValue]
  );

  const onSubmit: SubmitHandler<TAddDeviceFormFields> = (data) => {
    addDeviceMutation(data);
    onSubmitModalClose();
  };
  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      <AddDeviceFormFields
        onDeviceCardClick={setDeviceDefaultSettings}
        deviceTypeIdWatch={deviceTypeIdWatch}
        onRoomChange={handleRoomChange}
        rooms={rooms}
        formErrors={errors}
        formControl={control}
      />
    </StyledFormContainer>
  );
};

export default AddDeviceForm;
