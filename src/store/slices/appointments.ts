import { Appointments } from "@/constants/types";
import instance from "@/utilites/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


interface AppointmentState {
  appointmentData: Appointments[];
  isLoading: boolean;
}
const initialState:AppointmentState = {
  appointmentData: [],
  isLoading: false,
};

export const fetchAppointment = createAsyncThunk(
  "appointment/getappointments",
  async () => {
    try {
      const res = await instance.get(`/api/appointments`);
      const result = await res.data;
      return result.response;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const postAppointment = createAsyncThunk(
  "appointment/postappointments",
  async (formData: any) => {
    if (
      !formData.dateAndTime ||
      !formData.patient ||
      !formData.purposeOfVisit ||
      !formData.appointmentStatus ||
      !formData.duration ||
      !formData.appointmentType ||
      !formData.consultationType
    ) {
      toast.error("All fields are required.");
      return;
    }
    try {
      await instance.post("/api/appointments", formData);
      toast.success("Appointment added successfully!");
    } catch (error) {
      console.log("error", error);
      toast.success("failed to add appointment");
    }
  }
);

export const deleteappointment = createAsyncThunk(
  "appointment/deleteappointment",
  async (id: string) => {
    try {
      await instance.delete("/api/addPatients", { data: { id: id } });
      return id;
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointmentData = action.payload;
      })
      .addCase(fetchAppointment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postAppointment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postAppointment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteappointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteappointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointmentData = state.appointmentData.filter(
          (patient) => patient.id !== action.payload
        );
      })
      .addCase(deleteappointment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const appointmentReducer = appointmentSlice.reducer;
