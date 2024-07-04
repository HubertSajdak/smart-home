/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';

import { darkTheme } from './theme';

type CustomTheme = typeof darkTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
