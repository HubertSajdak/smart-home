import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React, { ReactNode } from 'react';

import { StyledDeleteBtnContainer, StyledNavLink } from './nav-link.styled';

interface INavLinkProps {
  roomId: number;
  label: string;
  path: string;
  icon?: ReactNode;
  showDeleteIcon?: boolean;
  onDelete: (id: number) => void;
}

export const NavLink = ({ roomId, label, path, icon, showDeleteIcon = false, onDelete }: INavLinkProps) => {
  return (
    <StyledNavLink to={path}>
      {icon && icon} <span>{label}</span>
      {showDeleteIcon && (
        <StyledDeleteBtnContainer
          onClick={() => {
            onDelete(roomId);
          }}
        >
          <Icon name="Delete" width={16} height={16} />
        </StyledDeleteBtnContainer>
      )}
    </StyledNavLink>
  );
};
