import { TotalPatientChartProps } from "@/constants/types";
import usePieChart from "@/hooks/usePieChart";


const TotalPatientChart: React.FC<TotalPatientChartProps> = ({
  patients,
}) => {

  const { chartRef } = usePieChart({ patients });

  return (
    <div>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default TotalPatientChart;
