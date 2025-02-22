import { Typography } from '@smart-home/shared/design-system';
import React from 'react';

import { StyledChannelBar } from './channel-bar.styled';

interface IChannelBarProps {
  channelName: string;
  channelNumber: number;
  onClick: () => void;
  isActive: boolean;
}

const ChannelBar = ({ onClick, channelName, channelNumber, isActive }: IChannelBarProps) => {
  return (
    <StyledChannelBar onClick={onClick} $isActive={isActive}>
      <Typography variant={'bodyBold'}>{channelName}</Typography>
      <Typography variant={'bodyBold'}> Ch {channelNumber}</Typography>
    </StyledChannelBar>
  );
};

export default ChannelBar;
