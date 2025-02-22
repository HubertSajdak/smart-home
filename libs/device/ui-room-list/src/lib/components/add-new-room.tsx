import { Typography } from '@smart-home/shared/design-system';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { StyledAddNewRoomSection, StyledDividerDiv } from './add-new-room.styled';

interface IAddNewRoomProps {
  onAddRoom: (label: string) => void;
}

const AddNewRoom = ({ onAddRoom }: IAddNewRoomProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <StyledAddNewRoomSection>
      <Typography color="grey" variant="body" capitalize>
        {t('roomList.rooms')}
      </Typography>
      <div onClick={() => onAddRoom('New Room')}>
        <Icon name={'Add'} color={theme.palette.common.white} />
      </div>
      <StyledDividerDiv />
    </StyledAddNewRoomSection>
  );
};

export default AddNewRoom;
