import { useUpdateDeviceSettings } from '@smart-home/device/data-access-device-list';
import { useDeviceSettingsStore } from '@smart-home/shared/utils/store';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import ChannelBar from './channel-bar';
import { StyledChannelList } from './channel-list.styled';
import { channelsConfig } from './channels-config';

const ChannelList = () => {
  const { selectedDeviceId, selectedDeviceSettings } = useDeviceSettingsStore();
  const { mutate: deviceSettingsMutation } = useUpdateDeviceSettings();
  const [activeChannel, setActiveChannel] = useState(0);
  const handleChannelChange = (channel: number) => {
    setActiveChannel(channel);
  };
  const updateChannel = useDebouncedCallback(() => {
    if (!selectedDeviceId || !selectedDeviceSettings || !('channel' in selectedDeviceSettings)) return;
    const mappedSettings = {
      ...selectedDeviceSettings,
      channel: activeChannel,
    };
    deviceSettingsMutation({
      deviceId: selectedDeviceId,
      deviceSettings: mappedSettings,
    });
  }, 300);
  useEffect(() => {
    if (!selectedDeviceSettings || !('channel' in selectedDeviceSettings)) return;
    setActiveChannel(selectedDeviceSettings.channel);
  }, [selectedDeviceSettings]);

  useEffect(() => {
    updateChannel();
  }, [activeChannel, updateChannel]);

  return (
    <StyledChannelList>
      {channelsConfig.map(({ id, channelNumber, channelName }) => {
        return (
          <ChannelBar
            key={id}
            isActive={activeChannel === channelNumber}
            channelName={channelName}
            channelNumber={channelNumber}
            onClick={() => handleChannelChange(channelNumber)}
          />
        );
      })}
    </StyledChannelList>
  );
};

export default ChannelList;
