import { configureStore } from '@reduxjs/toolkit';

import prodlistReducer from '../features/app10/prodlistSlice';

export const store = configureStore({
  reducer: {

    prodlist: prodlistReducer,
  },
});
