import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import FormReducer from "./formSlice";
import dataReducer from "./dataSlice";
import rootSaga from "./Sagas";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store
export const store = configureStore({
  reducer: {
    forms: FormReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable thunk since we are using Saga
    }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);
