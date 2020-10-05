import React, { Component } from 'react';

const MerchantDetailsTableHeader = () => {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Merchant Name</th>
            <th>Status</th>
            <th>Currency</th>
        </tr>
    </thead>)
}

const MerchantDetailsTableContent = (props) => {
    let rows = props.transactionsData.map((row, index) => {
        return (
            <tr key={index} >
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.isTrading ? 'Trading' : 'Not Trading'}</td>
                <td>{row.currency}</td>
            </tr>
        )
    })
    return (<tbody>{rows}</tbody>)
}

class MerchantTransactions extends Component {
    render() {
        const { transactionsData } = this.props;
        return (
            <div>
                <table className="table">
                    <MerchantDetailsTableHeader />
                    <MerchantDetailsTableContent transactionsData={transactionsData} />
                </table>
                <div className="container">
                </div>
            </div>)
    }
}

export default MerchantTransactions