import { Input, InputProps } from '@mui/base/Input';
import { Icon, useMediaQuery } from '@smart-home/shared/theme/smart-home-theme';
import { NavLink } from '@smart-home/shared/ui';
import { truncateString } from '@smart-home/shared/utils/functions';
import { routes } from '@smart-home/shared/utils/routes';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { StyledDoneIconContainer, StyledRoomInput } from './room-input.styled';

type TRoomInputProps = {
  label: string;
  roomId: number;
  onEditRoom: ({ id, label }: { id: number; label: string }) => void;
} & InputProps;

const RoomInput = ({ label, roomId, onEditRoom, ...rest }: TRoomInputProps) => {
  const theme = useTheme();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [roomLabel, setRoomLabel] = useState('');
  const isTablet = useMediaQuery('tabletSize');
  const shortenNavLinkTitle = isTablet ? 22 : 16;
  const onInputBlur = () => {
    onEditRoom({ id: roomId, label: roomLabel });
    setIsEditing(false);
  };
  const onInputFocus = () => setIsEditing(true);
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setRoomLabel(e.target.value);
  const onDoneIconClick = () => setIsEditing(false);
  const showDeleteIcon = id ? +id === roomId : false;
  return (
    <StyledRoomInput
      onDoubleClick={() => {
        setIsEditing(true);
      }}
    >
      {isEditing ? (
        <div>
          <Icon name={'GridView'} color={theme.palette.common.white} />
          <Input
            defaultValue={label}
            {...rest}
            autoFocus={true}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            placeholder={'Enter name'}
            onChange={onInputChange}
            value={roomLabel}
          />
          <StyledDoneIconContainer onClick={onDoneIconClick}>
            <Icon name={'Done'} width={16} height={16} color={'white'} />
          </StyledDoneIconContainer>
        </div>
      ) : (
        <NavLink
          label={truncateString(label, shortenNavLinkTitle)}
          icon={<Icon name={'GridView'} color={theme.palette.common.white} />}
          path={routes.room.path(roomId)}
          showDeleteIcon={showDeleteIcon}
          roomId={roomId}
        />
      )}
    </StyledRoomInput>
  );
};

export default RoomInput;
