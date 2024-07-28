import { DeviceFeatureDeviceDashboard } from '@smart-home/device/feature-device-dashboard';
import { routes } from '@smart-home/shared/utils/routes';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './layout/layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>Something went wrong...</h1>,
    children: [
      { index: true, path: routes.device.list.url, element: <DeviceFeatureDeviceDashboard /> },
      {
        path: routes.settings.url,
        element: <DeviceFeatureDeviceDashboard />,
      },
      {
        path: routes.room.url,
        element: <DeviceFeatureDeviceDashboard />,
      },
    ],
  },
]);
