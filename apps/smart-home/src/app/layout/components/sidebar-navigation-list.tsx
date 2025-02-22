import { useDeleteRoom } from '@smart-home/device/data-access-room-list';
import { NavLink } from '@smart-home/shared/design-system';
import { Icon } from '@smart-home/shared/theme/smart-home-theme';
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
  const { mutate: deleteRoomMutation } = useDeleteRoom();
  const deleteRoom = (roomId: number) => {
    deleteRoomMutation(roomId);
  };
  return (
    <>
      <StyledNavigationList>
        {navigationLinks.map(({ label, path, icon }, idx) => {
          return (
            <NavLink
              key={label}
              roomId={idx}
              icon={icon}
              label={t(formatTranslationKey(label))}
              path={path}
              onDelete={deleteRoom}
            />
          );
        })}
      </StyledNavigationList>
    </>
  );
};

export default SidebarNavigationList;
