import { ApexOptions } from "apexcharts";

export interface AppointmentDataType {
  onlineConsultation: boolean;
  dateAndTime: string;
}

interface State {
  series: { name: string; data: { x: Date; y: number }[] }[];
  options: ApexOptions;
}


const useOfflineChart = ({ appointmentData }:any) => {
  const filteredAppointments = appointmentData?.filter(
    (appointment: any) => !(appointment.consultationType === "Yes")
  );

  // console.log('filteredAppointments', filteredAppointments)
  const countAppointmentsByDay = (appointments: AppointmentDataType[]) => {
    const appointmentCounts = appointments?.reduce(
      (acc: Record<string, number>, appointment) => {
        const date = new Date(appointment.dateAndTime).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      },
      {}
    );
    return Object.entries(appointmentCounts).map(([date, count]) => ({
      x: new Date(date),
      y: count,
    }));
  };

  const offlineChartData = countAppointmentsByDay(filteredAppointments);
  // console.log('offlineChartData', offlineChartData)
  const initialState: State = {
    series: [
      {
        name: "Offline Consultations",
        data: offlineChartData,
      },
    ],
    options: {
      chart: {
        type: "area",
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: offlineChartData.map((data) => data.x),
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };
  return {
    initialState,
  };
};

export default useOfflineChart