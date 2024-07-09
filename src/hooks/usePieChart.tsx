"use client"
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";


const usePieChart = ({patients}:any) => {

  const chartRef = useRef<HTMLDivElement>(null);

  const maleCount = patients.filter(
    (patient: any) => !(patient.gender === "Female")
  ).length;

  const femaleCount = patients.filter(
    (patient: any) => !(patient.gender === "Male")
  ).length;

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: [maleCount, femaleCount],
        chart: {
          width: 190,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  showAlways: true,
                  label: "Patients",
                  formatter: function (w: any) {
                    return w.globals.seriesTotals.reduce((a: any, b: any) => {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
        legend: {
          show: false,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [maleCount, femaleCount]);
  return {
    chartRef
  };
};

export default usePieChart;
