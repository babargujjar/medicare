import ReactApexChart from "react-apexcharts";
import useOnlineChart from "@/hooks/useOnlineChart";
import { OfflineChartProps } from "@/constants/types";



const OnlineChart: React.FC<OfflineChartProps> = ({ appointmentData }) => {

  const { initialState } = useOnlineChart({ appointmentData });

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

export default OnlineChart;
