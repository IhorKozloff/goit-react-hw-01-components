import PropTypes from "prop-types";
import { TransactionTable, TransactionTableHead, TransactionTableHeadItem, TransactionTableRow, TransactionTableItem } from 'components/TransactionsHistory/transaction-history.styled';

export const TransactionHistory = ({items}) =>
(
    <TransactionTable className="transaction-history">
        <TransactionTableHead>
            <tr>
                <TransactionTableHeadItem>Type</TransactionTableHeadItem>
                <TransactionTableHeadItem>Amount</TransactionTableHeadItem>
                <TransactionTableHeadItem>Currency</TransactionTableHeadItem>
            </tr>
        </TransactionTableHead>

        <tbody>
            { items.map(item => {
                return (
                    <TransactionTableRow key={item.id}>
                        <TransactionTableItem style={{textTransform: 'capitalize'}}>{item.type}</TransactionTableItem>
                        <TransactionTableItem>{item.amount}</TransactionTableItem>
                        <TransactionTableItem>{item.currency}</TransactionTableItem>  
                    </TransactionTableRow>
                )
                })
            }
        </tbody>
    </TransactionTable>
);

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}