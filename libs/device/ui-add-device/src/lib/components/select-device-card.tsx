import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { Typography } from '@smart-home/shared/ui';
import { deviceColorMapping } from '@smart-home/shared/utils/functions';
import React from 'react';
import styled, { useTheme } from 'styled-components';

interface ISelectDeviceCard {
  deviceTypeId: number;
  label: string;
  iconName: 'LightBulb' | 'GridView' | 'Monitor' | 'HomeHealth';
  onDeviceCardClick: (deviceTypeId: number) => void;
  isActive: boolean;
}

const SelectDeviceCard = ({ label, iconName, deviceTypeId, onDeviceCardClick, isActive }: ISelectDeviceCard) => {
  const theme = useTheme();
  return (
    <>
      <StyledSelectDeviceCard
        $isActive={isActive}
        $color={deviceColorMapping(deviceTypeId, theme)}
        onClick={() => onDeviceCardClick(deviceTypeId)}
      >
        <Icon name={iconName} height={34} width={34} />
        <Typography variant={'bodyBold'} color={'dark'}>
          {label}
        </Typography>
      </StyledSelectDeviceCard>
    </>
  );
};

export default SelectDeviceCard;

const StyledSelectDeviceCard = styled('div')<{ $isActive: boolean; $color: number }>`
  background-color: ${({ $color }) => $color};
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing(1)};
  flex-basis: 40%;
  text-transform: capitalize;
  border: ${({ $isActive, theme }) => ($isActive ? `2px solid ${theme.palette.common.white}` : 'none')};
`;
