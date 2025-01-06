import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';

import { StyledIconWrapper, StyledSercuitySettings } from './security-settings.styled';
import Switch from './switch';

const SecuritySettings = () => {
  const theme = useTheme();
  const [isOn, setIsOn] = useState(false);
  const handleCheck = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);
  return (
    <StyledSercuitySettings>
      <StyledIconWrapper>
        <Icon
          name={'Shield'}
          height={240}
          width={240}
          color={isOn ? theme.palette.device.security : theme.palette.primary.main}
        />
      </StyledIconWrapper>
      <Switch onClick={handleCheck} checked={isOn} />
    </StyledSercuitySettings>
  );
};

export default SecuritySettings;
