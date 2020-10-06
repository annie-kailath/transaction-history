import React, { Component } from 'react';
import Amount from './amount';

const TableHeader = () => {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Expiry</th>
            <th>Amount</th>
        </tr>
    </thead>)
}
const TableContent = (props) => {
    let merchantTransactions = props.transactions;
    const rows = merchantTransactions.transactions.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.customerId}</td>
                <td>{row.date}</td>
                <td>{row.ccExpiry}</td>
                <td><Amount amount={row.amount} currency={merchantTransactions.currency}/></td>
            </tr>
        )
    })
    return (<tbody>{rows}</tbody>)
}
class TransactionDetails extends Component {
    render() {
        const { transactions } = this.props;
        return (
            <div className="container">
                <h3>{transactions.name + ' Transactions'}</h3>
                <table className="table">
                    <TableHeader />
                    <TableContent transactions={transactions} />
                </table>
            </div>
        )

    }
}

export default TransactionDetails;