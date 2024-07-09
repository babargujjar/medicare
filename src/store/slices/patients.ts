import { Patient } from "@/constants/types";
import instance from "@/utilites/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



interface PatientState {
  patientData: Patient[];
  isLoading: boolean;
}


const initialState: PatientState = {
  patientData: [],
  isLoading: false,
};

export const fetchPatient = createAsyncThunk(
  "patients/getPatients",
  async () => {
    try {
      const res = await instance.get(`/api/addPatients`);
      const result = await res.data;
      return result.response;
    } catch (error) {
        console.log('error', error)
    }
  }
);


export const deletePatient = createAsyncThunk(
  "patients/deletePatients",
  async (id:string) => {
  try {
    await instance.delete("/api/addPatients", { data: { id: id } });
    return id;

  } catch (error) {
    console.error("Error deleting patient:", error);
  }
  }
);


const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patientData = action.payload;
      })
      .addCase(fetchPatient.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deletePatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patientData = state.patientData.filter(
          (patient) => patient.id !== action.payload
        );
      })
      .addCase(deletePatient.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const patientReducer = patientSlice.reducer
