import PropTypes from 'prop-types';
import { StatisticsElement } from 'components/StatisticsElement/StatisticsElement';
import { StatList } from './StatisticsList.styled';

export const StatisticsList = ({ data }) => {
    return (
        <StatList>
            {data.map((element) => {
             return   <StatisticsElement key={element.id} element={element} />
            })}
            </StatList>
    );
};


StatisticsList.propTypes = {
    data: PropTypes.arrayoff(
        PropTypes.exact({
    id: PropTypes.number.isRequired,
        })
    ).isRequired,
}