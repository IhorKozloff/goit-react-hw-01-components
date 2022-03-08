import PropTypes from "prop-types";

export const Statistic = ({statsData}) => 
(<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
      {statsData.map(({id, label, percentage})=> (
          <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    
    
  </ul>
</section>);


Statistic.propTypes = {
    
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
 
  };