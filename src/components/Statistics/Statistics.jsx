import {Statistic, StatList} from "components/Statistics/Statistics.styled"
import PropTypes from "prop-types";

export const Statistics = ({ stats, title }) => {
  
    return (
      <Statistic>
        {title || <h2>{title}</h2>}
  

  <StatList>
          {stats.map(({id, label, percentage}) => (
      <li  key={id}>
              <span>{label} </span>
              <span>{percentage}%</span>
    </li>
    ))}
    
  </StatList>
</Statistic>
  );
};

Statistics.propTypes = {
   stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  })),
  
};