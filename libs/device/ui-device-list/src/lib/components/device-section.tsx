import { useGetRoomDevices, useUpdateDevicePowerSettings } from '@smart-home/device/data-access-device-list';
import { LoadingSpinner, Typography } from '@smart-home/shared/ui';
import { useDeviceStore } from '@smart-home/shared/utils/store';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import DeviceCard from './device-card';
import DeviceRow from './device-row';
import { StyledDeviceList, StyledDeviceSection } from './device-section.styled';

interface IDeviceSectionProps {
  roomId: number;
  roomLabel: string;
}

const DeviceSection = ({ roomId, roomLabel }: IDeviceSectionProps) => {
  const { t } = useTranslation();
  const deviceListDisplayType = useDeviceStore((state) => state.deviceListDisplayType);
  const { data: roomDevices, isLoading } = useGetRoomDevices(roomId);
  const { mutate: updateDevicePowerMutation } = useUpdateDevicePowerSettings();
  const handleDevicePowerOn = useCallback(
    ({ deviceId, isOn }: { deviceId: number; isOn: boolean }) => {
      updateDevicePowerMutation({ deviceId, isOn });
    },
    [updateDevicePowerMutation]
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <StyledDeviceSection>
      <div>
        <Typography color={'light'} variant={'headerM'}>
          {roomLabel}
        </Typography>
      </div>
      <StyledDeviceList $displayType={deviceListDisplayType}>
        {roomDevices && roomDevices.length > 0 ? (
          roomDevices.map(({ deviceName, deviceTypeId, roomAssignmentId, id, isOn, deviceSettings }) => {
            if (deviceListDisplayType === 'grid') {
              return (
                <DeviceCard
                  key={id}
                  deviceName={deviceName}
                  deviceTypeId={deviceTypeId}
                  isOn={isOn}
                  id={id}
                  onCardClick={() =>
                    handleDevicePowerOn({
                      deviceId: id,
                      isOn: !isOn,
                    })
                  }
                  deviceSettings={deviceSettings}
                  roomAssignmentId={roomAssignmentId}
                />
              );
            }
            return (
              <DeviceRow
                key={id}
                deviceName={deviceName}
                deviceTypeId={deviceTypeId}
                isOn={isOn}
                id={id}
                onRowClick={() =>
                  handleDevicePowerOn({
                    deviceId: id,
                    isOn: !isOn,
                  })
                }
                deviceSettings={deviceSettings}
                roomAssignmentId={roomAssignmentId}
              />
            );
          })
        ) : (
          <Typography variant={'body'} capitalize>
            {t('deviceList.noDevices')}
          </Typography>
        )}
      </StyledDeviceList>
    </StyledDeviceSection>
  );
};

export default DeviceSection;
