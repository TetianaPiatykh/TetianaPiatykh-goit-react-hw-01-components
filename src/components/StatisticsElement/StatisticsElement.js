import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from './StatisticsElement.styled';

export const StatisticsElement = ({element: { label, percentage }}) => {
    return <StatItem>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </StatItem>
};

StatisticsElement.propTypes = {
    element: PropTypes.exact({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
   }).isRequired,
}


