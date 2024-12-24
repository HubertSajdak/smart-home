import React, { useState } from 'react';

import ChannelBar from './channel-bar';
import { StyledChannelList } from './channel-list.styled';

const channelsList = [
  {
    id: 0,
    channelName: 'Animal Planet',
    channelNumber: 1,
  },
  {
    id: 1,
    channelName: 'Discovery',
    channelNumber: 2,
  },
  {
    id: 2,
    channelName: 'Cartoon Network',
    channelNumber: 3,
  },
  {
    id: 3,
    channelName: 'Regional Television',
    channelNumber: 4,
  },
  {
    id: 4,
    channelName: 'NBC',
    channelNumber: 5,
  },
  {
    id: 5,
    channelName: 'AXN',
    channelNumber: 6,
  },
  {
    id: 6,
    channelName: 'Comedy Central',
    channelNumber: 7,
  },
  {
    id: 7,
    channelName: 'CNN',
    channelNumber: 8,
  },
  {
    id: 8,
    channelName: 'MTV2',
    channelNumber: 9,
  },
];
const ChannelList = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const handleChannelChange = (channelNumber: number) => {
    setActiveChannel(channelNumber);
  };
  return (
    <StyledChannelList>
      {channelsList.map(({ id, channelNumber, channelName }) => {
        return (
          <ChannelBar
            key={id}
            isActive={activeChannel === channelNumber}
            onClick={() => handleChannelChange(channelNumber)}
            channelName={channelName}
            channelNumber={channelNumber}
          />
        );
      })}
    </StyledChannelList>
  );
};

export default ChannelList;
