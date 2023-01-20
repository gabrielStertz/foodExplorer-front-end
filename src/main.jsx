import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Orders } from './pages/Orders';
import { OrdersAdmin } from './pages/OrdersAdmin';
import { OrderDetails } from './pages/OrderDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <OrdersAdmin />
    </ThemeProvider>
  </React.StrictMode>,
);
