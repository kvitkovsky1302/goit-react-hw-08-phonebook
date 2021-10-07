import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsReducer';

const middleware = [...getDefaultMiddleware()];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export { store };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];
