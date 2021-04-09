/* eslint-disable*/

import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import chartCss from './chart.module.css'
import {VictoryPie} from 'victory'
const Chart = () => {
  const userWatchList = useSelector((state) => state.userWatchList); 
  const loginStatus = useSelector((state) => state.session);
  if (!loginStatus.isLoggedIn) {
    return <Redirect to="/" />;
  }

  const arrayOfDays = userWatchList.data.map(item => {
    return ((new Date(item.date)).toDateString()).substring(0,3);
  })
  const daysCount = [...new Set(arrayOfDays)].map((day)=> {
    return {
      x: day,
      y: arrayOfDays.reduce((acc, elem) => {
        return (elem === day ? acc + 1: acc)
      }, 0)
    }
  })
  const defaultData = [ { y: 10 }, { y: 0 }, { y: 0 }, { y: 0 }];
  const [data, setdata] = React.useState(defaultData);
  React.useEffect(() => {
    setdata(daysCount);
  }, []);
  return (
    <section className={`d-flex flex-column justify-content-center mt-5  mx-auto ${chartCss.wrapper}`}>
      <h3 className=' text-center border-bottom '>Most active days</h3>
      {
        daysCount.length > 0 ? (
          <>
          <VictoryPie className='border shadow-sm'
          colorScale={["#531919", "#003f5c" ,"#EB5C5D","#ECE63A", "#E9A44F", "#4863A6", "#4863A6"]}
          data={data}
          labels={({ datum }) => `${datum.x}\n${datum.y}`}
          labelRadius={({ innerRadius }) => innerRadius + 15 }
          radius={({ datum }) => 120 + datum.y * 15}
          innerRadius={70}
          animate={{ duration: 2000, easing: 'bounceOut'}}
          cornerRadius={({ datum }) => datum.y * 4}
          padAngle={({ datum }) => datum.y}
          style={{
            data: {
              fillOpacity: 0.9, stroke: "black", strokeWidth: 1
            },
            labels: {
              fontSize: 22, fill: "white", fontWeight: "bold"
            }
          }}
        />
        </>
        ) : (
          <h4 className='text-center'>You have no data yet. Click on the + button to add items</h4>
        )
      }
    </section>
  )
}

export default Chart