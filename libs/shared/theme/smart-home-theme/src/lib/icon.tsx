import styled from 'styled-components';

import * as IconNames from './icons';

interface IIconProps {
  name?: keyof typeof IconNames;
  width?: number;
  height?: number;
  color?: string;
}

export const Icon = ({ name = 'Add', width, height, color }: IIconProps) => {
  const SvgIcon = IconNames[name];
  return (
    <StyledDiv>
      <SvgIcon width={width} height={height} color={color} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
