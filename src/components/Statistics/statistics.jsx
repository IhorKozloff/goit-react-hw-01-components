import PropTypes from "prop-types";
import { StatisticsSection, SectionTittle, StatisticList, StatisticListItem, PercentValue } from "./statistics.styled";

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistic = ({statsData}) => 
(<StatisticsSection className="statistics">
  <SectionTittle className="title">Upload stats</SectionTittle>

  <StatisticList className="stat-list">
      {statsData.map(({id, label, percentage})=> {
        
        return ((
           <StatisticListItem key={id} className="item" style={{backgroundColor: getRandomColor()}}>
             <span className="label">{label}</span>
             <PercentValue className="percentage">{percentage}%</PercentValue>
           </StatisticListItem>
         ))
      })}
    
    
  </StatisticList>
</StatisticsSection>);


Statistic.propTypes = {
    
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
 
  };