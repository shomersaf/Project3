import { useGetGraphQuery } from "../store/api/vacations.api."
import "primereact/resources/primereact.min.css";   
import  { useState, useEffect } from 'react';

import { Chart } from 'primereact/chart';

export function Statistics (){
  const {isError,isLoading,data:vacations} = useGetGraphQuery("")
  const destinations = vacations?.map(vacation=>(vacation.destination))
  const followers = vacations?.map(vacation=>(vacation.followers))
  
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {

    
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
      const data = {
          labels: destinations,
      
          datasets:[
       
              {
                  label: "My Vacations",
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: followers
              },
                 
          ]
      };
      console.log(data.datasets)
      const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };

    setChartData(data);
    setChartOptions(options);



}, []);
    return(
      <div className="graph">
         {isError && <h4>Something went wrong...</h4>}
            {isLoading && <h4>Loading...</h4>}
          {vacations?.map(vacation =>(
            <p key={vacation.vcnId}>{vacation.destination} - {vacation.followers}</p>))}
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}