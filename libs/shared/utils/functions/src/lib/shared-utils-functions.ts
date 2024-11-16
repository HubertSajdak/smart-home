import { DefaultTheme } from 'styled-components';

export const truncateString = (string: string, displayedLength: number) => {
  return string.length > displayedLength ? string.slice(0, displayedLength - 1) + '...' : string;
};

export const formatTranslationKey = (key: string) => key as unknown as TemplateStringsArray;

export const deviceIconMapping = (deviceTypeId: number) => {
  if (deviceTypeId === 1) {
    return 'HomeHealth';
  }
  if (deviceTypeId === 2) {
    return 'Monitor';
  }
  if (deviceTypeId === 3) {
    return 'Settings';
  }
  if (deviceTypeId === 4) {
    return 'LightBulb';
  }
};

export const deviceColorMapping = (deviceTypeId: number, theme: DefaultTheme, isOn?: boolean) => {
  if (deviceTypeId === 1) {
    return theme.palette.device.security;
  }
  if (deviceTypeId === 2) {
    return theme.palette.device.media;
  }
  if (deviceTypeId === 3) {
    return theme.palette.device.temperature;
  }
  if (deviceTypeId === 4) {
    return theme.palette.device.light;
  }
};
