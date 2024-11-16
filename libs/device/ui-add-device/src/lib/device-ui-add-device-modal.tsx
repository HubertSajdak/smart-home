import { Icon } from '@smart-home/shared/theme/smart-home-theme';
import { IconButton } from '@smart-home/shared/ui';
import { MouseEvent, useCallback, useRef, useState } from 'react';

import AddDeviceForm from './components/add-device-form';
import {
  StyledAddDeviceBackground,
  StyledAddDeviceModalContent,
  StyledCloseIconContainer,
  StyledOpenModalContainer,
} from './device-ui-add-device.styled';

export function DeviceUiAddDeviceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef(null);
  const handleModalOpen = () => setIsOpen((prev) => !prev);
  const handleCloseModal = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (backgroundRef.current === e.target) {
      handleModalOpen();
    }
  }, []);
  return (
    <>
      <StyledOpenModalContainer>
        <IconButton color={'white'} icon={<Icon name={'Add'} />} onClick={handleModalOpen} />
      </StyledOpenModalContainer>
      {isOpen && (
        <StyledAddDeviceBackground onClick={handleCloseModal} ref={backgroundRef}>
          <StyledAddDeviceModalContent>
            <StyledCloseIconContainer onClick={handleModalOpen}>
              <Icon name={'Close'} color={'white'} height={30} width={30} />
            </StyledCloseIconContainer>
            <AddDeviceForm />
          </StyledAddDeviceModalContent>
        </StyledAddDeviceBackground>
      )}
    </>
  );
}