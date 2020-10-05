import React, { Component } from 'react';
import MerchantDetailsTableContent from './MerchantDetailsTableContent';

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
