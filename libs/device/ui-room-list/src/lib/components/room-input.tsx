import { Input, InputProps } from '@mui/base/Input';
import { DoneIcon, GridViewIcon } from '@smart-home/shared/assets';
import { NavLink } from '@smart-home/shared/ui/nav-link';
import { truncateString } from '@smart-home/shared/utils/functions';
import { useMediaQuery } from '@smart-home/shared/utils/hooks';
import { routes } from '@smart-home/shared/utils/routes';
import React, { useState } from 'react';

import { StyledRoomInput } from './room-input.styled';

type TRoomInputProps = {
  label: string;
  roomId: number;
  onEditRoom: (id: number, label: string) => Promise<void>;
} & InputProps;

const RoomInput = ({ label, roomId, onEditRoom, ...rest }: TRoomInputProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [roomLabel, setRoomLabel] = useState('');
  const isTablet = useMediaQuery('tabletSize');
  const truncateNumber = isTablet ? 22 : 16;

  return (
    <StyledRoomInput
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {isEditing ? (
        <div>
          <GridViewIcon />
          <Input
            defaultValue={label}
            {...rest}
            autoFocus={true}
            onBlur={async () => {
              await onEditRoom(roomId, roomLabel);
              setIsEditing(false);
            }}
            onFocus={() => setIsEditing(true)}
            placeholder={'Enter name'}
            onChange={(e) => setRoomLabel(e.target.value)}
          />
          <div
            onClick={async () => {
              setIsEditing(false);
            }}
          >
            <DoneIcon />
          </div>
        </div>
      ) : (
        <NavLink
          label={truncateString(label, truncateNumber)}
          icon={<GridViewIcon />}
          path={routes.room.path(roomId)}
        />
      )}
    </StyledRoomInput>
  );
};

export default RoomInput;
