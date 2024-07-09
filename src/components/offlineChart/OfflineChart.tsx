import ReactApexChart from "react-apexcharts";
import useOfflineChart from "@/hooks/useOfflineChart";
import { OfflineChartProps } from "@/constants/types";


const OfflineChart: React.FC<OfflineChartProps> = ({ appointmentData }) => {

  const {initialState} = useOfflineChart({ appointmentData });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={initialState.options}
          series={initialState.series}
          type="area"
          height={112}
          width={164}
        />
      </div>
    </div>
  );
};

export default OfflineChart;
