import { useDeleteRoom } from '@smart-home/device/data-access-room-list';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React, { ReactNode } from 'react';

import { StyledDeleteBtnContainer, StyledNavLink } from './nav-link.styled';

interface INavLinkProps {
  roomId: number;
  label: string;
  path: string;
  icon?: ReactNode;
  showDeleteIcon?: boolean;
}

export const NavLink = ({ roomId, label, path, icon, showDeleteIcon = false }: INavLinkProps) => {
  const { mutate: deleteRoomMutation } = useDeleteRoom();
  const deleteRoom = (roomId: number) => {
    deleteRoomMutation(roomId);
  };

  return (
    <StyledNavLink to={path}>
      {icon && icon} <span>{label}</span>
      {showDeleteIcon && (
        <StyledDeleteBtnContainer
          onClick={() => {
            deleteRoom(roomId);
          }}
        >
          <Icon name="Delete" width={16} height={16} />
        </StyledDeleteBtnContainer>
      )}
    </StyledNavLink>
  );
};
