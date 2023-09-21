  
import { useGetGraphQuery } from "../store/api/vacations.api."
import { Chart } from 'primereact/chart';


export function Statistics() {
  const { isError, isLoading, data } = useGetGraphQuery("")
  const vacations = data;
  const destinations = vacations?.map(vacation => (vacation.destination))
  const followers = vacations?.map(vacation => (vacation.followers))

  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  const chartData = {
    labels: destinations,

    datasets: [

      {
        label: "Followers per Vacation",
        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        data: followers
      },

    ]
  };
  console.log(chartData.datasets)
  const chartOptions = {
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
  
  return (
    <div className="graph">
      {isError && <p className="errorP">Something went wrong...</p>}
      {isLoading && <p className="loadingP">Loading...</p>|| <Chart type="bar" data={chartData} options={chartOptions} />}
      <div className="brif">
        <h3>Followers per Vacation:</h3>
      {vacations?.map(vacation => (
          <p key={vacation.vcnId}>{vacation.destination} - {vacation.followers}</p>
        ))}
     
      </div>
    
    </div>
  )
}