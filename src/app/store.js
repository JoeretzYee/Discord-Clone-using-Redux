import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";

import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  enhancers: [reduxBatch],
});
