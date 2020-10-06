import React, { Component } from 'react';
import MerchantDetailsTableContent from './MerchantDetailsTableContent';
import TransactionDetails from './TransactionDetails';

const MerchantDetailsTableHeader = () => {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Merchant</th>
            <th>Status</th>
            <th>Currency</th>
            <th></th>
        </tr>
    </thead>)
}

class MerchantTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedMerchant: undefined }
        this.setMerchantName = this.setMerchantName.bind(this);
    }
    setMerchantName = (name) => {
        this.setState({ selectedMerchant: name })
    }

    render() {
        const { transactionsData } = this.props;
        let transactionDetails;
        let selectedMerchantName = this.state.selectedMerchant;
        if (selectedMerchantName !== undefined) {
            let selectedMerchantTransactions = transactionsData.filter(transaction =>
                transaction.name === selectedMerchantName
            )[0];

            transactionDetails = <TransactionDetails transactions={selectedMerchantTransactions} />
        }
        return (
            <div>
                <table className="table">
                    <MerchantDetailsTableHeader />
                    <MerchantDetailsTableContent setCompanyName={this.setMerchantName} transactionsData={transactionsData} />
                </table>
                <br/>
                {transactionDetails}
            </div>)
    }
}

export default MerchantTransactions
