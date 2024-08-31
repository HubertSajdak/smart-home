import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledDiv, StyledDividerDiv } from './add-new-room.styled';

interface IAddNewRoomProps {
  onAddRoom: (label: string) => void;
}

const AddNewRoom = ({ onAddRoom }: IAddNewRoomProps) => {
  const { t } = useTranslation();
  return (
    <StyledDiv>
      <Typography color="grey" variant="body">
        {t('roomList.rooms')}
      </Typography>
      <div onClick={() => onAddRoom('New Room')}>
        <Icon name={'Add'} />
      </div>
      <StyledDividerDiv />
    </StyledDiv>
  );
};

export default AddNewRoom;
