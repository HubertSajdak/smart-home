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
  const handleCloseModalOnBackgroundClick = useCallback((e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
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
        <StyledAddDeviceBackground onClick={handleCloseModalOnBackgroundClick} ref={backgroundRef}>
          <StyledAddDeviceModalContent>
            <StyledCloseIconContainer>
              <IconButton
                color="grey"
                icon={<Icon name={'Close'} color={'white'} width={16} height={16} />}
                onClick={handleModalOpen}
              />
            </StyledCloseIconContainer>
            <AddDeviceForm onSubmitModalClose={() => handleModalOpen()} />
          </StyledAddDeviceModalContent>
        </StyledAddDeviceBackground>
      )}
    </>
  );
}
