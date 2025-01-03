import { ErrorMessage } from '@hookform/error-message';
import { IRoomsList } from '@smart-home/device/data-access-room-list';
import { Button, Input, Select, Typography } from '@smart-home/shared/ui';
import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { addDeviceCardsConfig } from '../add-device-cards-config';
import { TAddDeviceFormFields } from '../schema/add-device-schema';
import { StyledDeviceTypeCardContainer, StyledInputContainer } from './add-device-form-fields.styled';
import SelectDeviceCard from './select-device-card';

interface IAddDeviceFormFieldsProps {
  onDeviceCardClick: (deviceTypeId: number) => void;
  deviceTypeIdWatch: number;
  onRoomChange: (value: number) => void;
  rooms: IRoomsList[] | null | undefined;
  formErrors: FieldErrors;
  formControl: Control<TAddDeviceFormFields>;
}

const AddDeviceFormFields = ({
  formErrors,
  formControl,
  rooms,
  onDeviceCardClick,
  deviceTypeIdWatch,
  onRoomChange,
}: IAddDeviceFormFieldsProps) => {
  const { t } = useTranslation();
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

  return (
    <>
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
      <ErrorMessage
        name={'deviceTypeId'}
        errors={formErrors}
        render={({ message }) => (
          <Typography variant={'body'} color={'warning'}>
            {t(message)}
          </Typography>
        )}
      />
      <StyledInputContainer>
        <Typography variant={'body'} color={'light'} capitalize>
          {t('addDeviceForm.roomSelectLabel')}
        </Typography>
        <Controller
          name={'roomAssignmentId'}
          control={formControl}
          defaultValue={-1}
          render={({ field }) => (
            <Select
              {...field}
              variant="input"
              placeholder={t('addDeviceForm.roomSelectPlaceholder')}
              onChange={(e, value) => {
                const newValue = value as number;
                onRoomChange(newValue);
              }}
              optionsList={roomsToOptionsMapping(rooms)}
            />
          )}
        />
        <ErrorMessage
          name={'roomAssignmentId'}
          errors={formErrors}
          render={({ message }) => (
            <Typography variant={'body'} color={'warning'}>
              {t(message)}
            </Typography>
          )}
        />
        <Typography variant={'body'} color={'light'} capitalize>
          {t('addDeviceForm.addDeviceNameLabel')}
        </Typography>
        <Controller name={'deviceName'} control={formControl} render={({ field }) => <Input {...field} />} />
        <ErrorMessage
          name={'deviceName'}
          errors={formErrors}
          render={({ message }) => (
            <Typography variant={'body'} color={'warning'}>
              {t(message)}
            </Typography>
          )}
        />
      </StyledInputContainer>
      <Button type={'submit'}>{t('buttons.addDevice')}</Button>
    </>
  );
};

export default AddDeviceFormFields;
