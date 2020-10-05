import React, { Component } from 'react';

const TableHeader = () => {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Expiry</th>
            <th>Amount</th>
        </tr>
    </thead>)
}
const TableContent = (props) => {
    const rows = props.transactions.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.customerId}</td>
                <td>{row.date}</td>
                <td>{row.ccExpiry}</td>
                <td>{row.amount}</td>
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
                    <TableContent transactions={transactions.transactions} />
                </table>
            </div>
        )

    }
}

export default TransactionDetails;