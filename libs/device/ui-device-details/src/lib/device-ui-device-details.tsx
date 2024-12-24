import { RoomAssignmentSection } from './components/room-assignment-section';
import { SettingsSectionWrapper } from './components/settings-section-wrapper';
import { TopSection } from './components/top-section';
import { StyledDeviceDetails } from './device-ui-device-details.styled';

export function DeviceUiDeviceDetails() {
  return (
    <StyledDeviceDetails>
      <TopSection />
      <SettingsSectionWrapper />
      <RoomAssignmentSection />
    </StyledDeviceDetails>
  );
}
