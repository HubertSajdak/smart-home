import resources from './resources';

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface CustomTypeOptions {
    defaultNS: ['translation'];
    resources: typeof resources;
  }
}
