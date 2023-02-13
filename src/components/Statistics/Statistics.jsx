import {Statistic, StatList} from "components/Statistics/Statistics.styled"
import PropTypes from "prop-types";

export const Statistics = ({ statistics }) => {
  
    return (
     <Statistic>
  <h2>Upload stats</h2>

  <StatList>
          {statistics.map(({id, label, percentage}) => (
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
   statistics: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  })),
  
};