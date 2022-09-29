import PropTypes from 'prop-types';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { StatSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
           { title && <StatisticsTitle title="Upload Stats" />}
            <StatisticsList data={stats} />
        </StatSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}