import { configureStore } from '@reduxjs/toolkit'
import menuSlice from '../features/menu/menuSlice';

export default configureStore({
  reducer: {
    menu: menuSlice,
  }
});
