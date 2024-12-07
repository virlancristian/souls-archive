import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from './routers/router';
import reportWebVitals from './reportWebVitals';
import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
