import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from "./store";
import AppRoutes from './components/AppRoutes';

function App() {
  return (
      <Provider store={store}>
         <AppRoutes />
      </Provider>
  );
}

export default App;
