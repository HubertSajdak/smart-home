import { AddIcon } from '@smart-home/shared/assets';
import { Typography } from '@smart-home/shared/ui/typography';
import React from 'react';

import { StyledDiv, StyledDividerDiv } from './add-new-room.styled';

interface IAddNewRoomProps {
  onAddRoom: (label: string) => Promise<void>;
}

const AddNewRoom = ({ onAddRoom }: IAddNewRoomProps) => {
  return (
    <StyledDiv>
      <Typography color="grey" variant="body">
        ROOMS
      </Typography>
      <div onClick={async () => await onAddRoom('New Room')}>
        <AddIcon />
      </div>
      <StyledDividerDiv />
    </StyledDiv>
  );
};

export default AddNewRoom;
