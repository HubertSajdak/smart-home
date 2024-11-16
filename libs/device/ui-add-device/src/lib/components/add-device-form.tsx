import { zodResolver } from '@hookform/resolvers/zod';
import { useAddDevice } from '@smart-home/device/data-access-device-list';
import { IRoomsList, useGetRooms } from '@smart-home/device/data-access-room-list';
import { Button, Input, Select, Typography } from '@smart-home/shared/ui';
import React, { useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { addDeviceCardsConfig } from '../add-device-cards-config';
import { addDeviceSchema, TAddDeviceFormFields } from '../schema/add-device-schema';
import { StyledDeviceTypeCardContainer, StyledFormContainer, StyledInputContainer } from './add-device-form.styled';
import SelectDeviceCard from './select-device-card';

const AddDeviceForm = () => {
  const { t } = useTranslation();
  const { data: rooms } = useGetRooms();
  const { mutate: addDeviceMutation } = useAddDevice();
  const { control, handleSubmit, setValue, watch } = useForm<TAddDeviceFormFields>({
    defaultValues: {
      deviceTypeId: -1,
      deviceName: '',
      deviceConfig: null,
      roomAssignmentId: -1,
    },
    resolver: zodResolver(addDeviceSchema),
  });
  const deviceTypeIdWatch = watch('deviceTypeId');

  const onDeviceCardClick = useCallback(
    (deviceTypeId: number) => {
      setValue('deviceTypeId', deviceTypeId);
    },
    [setValue]
  );
  const onRoomChange = useCallback(
    (value: number) => {
      setValue('roomAssignmentId', value);
    },
    [setValue]
  );
  const roomsToOptionsMapping = (rooms: IRoomsList[] | null | undefined) => {
    if (rooms && rooms.length > 0) {
      return rooms.map(({ id, label }) => {
        return {
          value: id,
          label,
        };
      });
    }
    return [];
  };
  const onSubmit: SubmitHandler<TAddDeviceFormFields> = (data) => {
    addDeviceMutation(data);
  };
  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Typography variant={'headerS'} color={'light'} capitalize>
        {t('addDeviceForm.title')}
      </Typography>
      <Typography variant={'body'} color={'light'} capitalize>
        {t('addDeviceForm.selectTypeHeader')}
      </Typography>
      <StyledDeviceTypeCardContainer>
        {addDeviceCardsConfig.map(({ label, deviceTypeId, iconName }) => (
          <SelectDeviceCard
            key={deviceTypeId}
            isActive={deviceTypeId === deviceTypeIdWatch}
            deviceTypeId={deviceTypeId}
            label={label}
            iconName={iconName}
            onDeviceCardClick={onDeviceCardClick}
          />
        ))}
      </StyledDeviceTypeCardContainer>
      <StyledInputContainer>
        <Typography variant={'body'} color={'light'} capitalize>
          {t('addDeviceForm.roomSelectLabel')}
        </Typography>
        <Controller
          name={'roomAssignmentId'}
          control={control}
          defaultValue={-1}
          render={({ field }) => (
            <Select
              {...field}
              placeholder={t('addDeviceForm.roomSelectPlaceholder')}
              onChange={(e, value) => {
                const newValue = value as number;
                onRoomChange(newValue);
              }}
              optionsList={roomsToOptionsMapping(rooms)}
            />
          )}
        />
        <Typography variant={'body'} color={'light'} capitalize>
          {t('addDeviceForm.addDeviceNameLabel')}
        </Typography>
        <Controller name={'deviceName'} control={control} render={({ field }) => <Input {...field} />} />
      </StyledInputContainer>
      <Button type={'submit'}>{t('buttons.addDevice')}</Button>
    </StyledFormContainer>
  );
};

export default AddDeviceForm;
