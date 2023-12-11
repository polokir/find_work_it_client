// Import statements at the top
import { useState, useEffect } from "react";
import axios from "../../redux/axios-config";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container } from "../../styled-components/Container.styled";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { DateInput } from "./Statistic.styled";
import { Button } from "@mui/material";
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Statistic = () => {
  const [data, setData] = useState([]);
  const [platData, setPlatData] = useState([]);
  const [date, setDateFrom] = useState({ from: "", to: "" });
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    const fetchMediana = async () => {
      try {
        const result = await axios.get(`http://localhost:4444/vacancy/statistcs?from=${date.from}&to=${date.to}`);
        setData([
          {
            labels: Object.keys(result.data.mediansByMonth),
            datasets: [
              {
                label: "SALARY MEDIAN BY MONTH",
                data: Object.values(result.data.mediansByMonth),
                backgroundColor: "aqua",
                borderColor: "black",
                borderWidth: 1, 
              },
            ],
          },
          {
            labels: Object.keys(result.data.mediansByExpierence),
            datasets: [
              {
                label: "SALARY MEDIAN BY EXPIERENCE",
                data: Object.values(result.data.mediansByExpierence),
                backgroundColor: "red",
                borderColor: "black",
                borderWidth: 1, 
              },
            ],
          },
        ]);
        setIsChanged(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    //finalStatEmployee
    const fetchPlatformData = async () => {
      const result = await axios.get(
        `api/recrut/stat?from=${date.from}&to=${date.to}`
      );
      console.log( Object.keys(result.data.finalStatRecrut))
      setData((prevState) => [
        ...prevState,
        {
          labels: Object.keys(result.data.finalStatRecrut),
          datasets: [
            {
              label: "QUANTITY OF RECRUTS",
              data: Object.values(result.data.finalStatRecrut),
              backgroundColor: "#E26EE5",
              borderColor: "black",
              borderWidth: 1, 
            },
            {
              label: "QUANTITY OF EMPLOYESS",
              data: Object.values(result.data.finalStatEmployee),
              backgroundColor: "#49108B",
              borderColor: "black",
              borderWidth: 1, 
            },
          ],
        },
      ]);
    };

    if (isChanged) {
      fetchMediana();
      fetchPlatformData();
    }
  }, [isChanged]);
  console.log(isChanged);
  const options = {};
  console.log(data);
  return (
    <Container>
      <LoginHeader />
      <DateInput
        onChange={(e) =>
          setDateFrom((prevState) => ({ ...prevState, from: e.target.value }))
        }
        type="date"
      />
      <DateInput
        onChange={(e) =>
          setDateFrom((prevState) => ({ ...prevState, to: e.target.value }))
        }
        type="date"
      />
      <Button onClick={() => setIsChanged(true)}>Get data</Button>
      {data.length > 0 && (
        <>
          <Bar data={data[0]} options={options} />
          <Bar data={data[1]} options={options} />
          {data[2] && <Bar data={data[2]} options={options} />}
        </>
      )}
    </Container>
  );
};

export default Statistic;
