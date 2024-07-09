import { configureStore } from "@reduxjs/toolkit";
import { patientReducer } from "./slices/patients";
import { appointmentReducer } from "./slices/appointments";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    appointment: appointmentReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
