import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import { Table, Thead } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
       <Table>
  <thead>
    <tr>
      <Thead>Type</Thead>
      <Thead>Amount</Thead>
      <Thead>Currency</Thead>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => {
             return   <Transaction key={item.id} item={item} />
            })}
  </tbody>
</Table>
   )
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}



