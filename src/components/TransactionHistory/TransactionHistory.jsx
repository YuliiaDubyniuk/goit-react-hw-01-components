import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
        <thead className={css.head}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(trans => (
                <tr key={trans.id}>
                    <td className={css.type}>{trans.type}</td>
                    <td>{trans.amount}</td>
                    <td>{trans.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};