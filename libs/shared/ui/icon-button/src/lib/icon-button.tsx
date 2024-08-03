import { ReactNode } from 'react';

import { StyledIconButton } from './icon-button.styled';

interface IIconButtonProps {
  color: 'primary.main' | 'primary.light' | 'white' | 'black';
  icon: ReactNode;
  onClick: () => void;
}

export function IconButton({ onClick, icon, color }: IIconButtonProps) {
  return (
    <StyledIconButton $color={color} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
}

export default IconButton;
