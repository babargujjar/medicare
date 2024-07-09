export type AppointmentModalProps = {
  setModal: (value: boolean) => void;
}

export type Appointment = {
  id: string;
  dateAndTime: string;
  patient: string;
  purposeOfVisit: string;
  appointmentStatus: string;
  duration: string;
  appointmentType: string;
  consultationType: string;
}

export type OfflineChartProps = {
  appointmentData: Appointment[];
}

export type Patient = {
  id: string;
  foreName: string;
  sureName: string;
  dateBirth: string;
  gender: string;
  diasease: string;
  note: string;
  phone: string;
  status: string;
  createdAT: string;
}



export type Appointments = {
  id: string;
  dateAndTime: string;
  patient: string;
  purposeOfVisit: string;
  appointmentStatus: string;
  duration: string;
  appointmentType: string;
  consultationType: string;
}

export type TotalPatientChartProps = {
  patients: Patient[];
}


export type UserData = {
  id: string;
  createdAt: string;
  hashedPassword: string;
  email: string;
}

export type UserState = {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}