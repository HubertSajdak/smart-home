import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { NavLink } from '@smart-home/shared/ui';
import { formatTranslationKey } from '@smart-home/shared/utils/functions';
import { routes } from '@smart-home/shared/utils/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledNavigationList } from './sidebar-navigation.styled';

const navigationLinks = [
  {
    icon: <Icon name={'HomeHealth'} width={24} height={24} />,
    label: 'navigation.dashboard',
    path: routes.device.list.path(),
  },
  {
    icon: <Icon name={'Settings'} width={24} height={24} />,
    label: 'navigation.settings',
    path: routes.settings.path(),
  },
];
const SidebarNavigationList = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledNavigationList>
        {navigationLinks.map(({ label, path, icon }) => {
          return <NavLink key={label} icon={icon} label={t(formatTranslationKey(label))} path={path} />;
        })}
      </StyledNavigationList>
    </>
  );
};

export default SidebarNavigationList;
