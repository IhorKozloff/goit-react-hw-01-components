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
                        <TransactionTableItem>{item.type}</TransactionTableItem>
                        <TransactionTableItem>{item.amount}</TransactionTableItem>
                        <TransactionTableItem>{item.currency}</TransactionTableItem>  
                    </TransactionTableRow>
                )
                })
            }
        </tbody>
    </TransactionTable>
);