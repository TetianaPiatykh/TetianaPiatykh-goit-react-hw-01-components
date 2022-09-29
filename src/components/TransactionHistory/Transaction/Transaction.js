import PropTypes from 'prop-types';
import { TransList, TransData } from './Transaction.styled';

export const Transaction = ({item: {type, amount, currency}}) => {
 return <TransList>
      <TransData>{type}</TransData>
      <TransData>{amount}</TransData>
      <TransData>{currency}</TransData>
    </TransList>
};

Transaction.propTypes = {
    item: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
}