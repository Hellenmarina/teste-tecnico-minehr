import ReactApexChart from "react-apexcharts";
import { RiInformationFill } from "react-icons/ri";
import { BodyBar, TittleBar } from "./BarStyled";

function Bar() {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <BodyBar>
      <TittleBar>
        Barras <RiInformationFill color="#19D7AA" />
      </TittleBar>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </BodyBar>
  );
}

export default Bar;
