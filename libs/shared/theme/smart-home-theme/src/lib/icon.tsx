import styled from 'styled-components';

import * as IconNames from './icons';

interface IIconProps {
  name?: keyof typeof IconNames;
  width?: number;
  height?: number;
}

export const Icon = ({ name = 'Add', width, height }: IIconProps) => {
  const SvgIcon = IconNames[name];
  return (
    <StyledDiv>
      <SvgIcon width={width} height={height} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
