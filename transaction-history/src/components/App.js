import React, { Component } from 'react';
import customers from './data/mockCustomers.json';
import merchants from './data/mockMerchants.json';
import Customers from './Customers';
import MerchantTransactions from './MerchantTransactions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { merchantTransaction: true };
        this.displayMerchantDetails = this.displayMerchantDetails.bind(this);
        this.displayCustomers = this.displayCustomers.bind(this);
    }
    displayMerchantDetails() {
        this.setState(state => ({
            merchantTransaction: true
        }));
    }
    displayCustomers() {
        this.setState(state => ({
            merchantTransaction: false
        }));
    }
    render() {
        let table;
        let merchantTransaction = this.state.merchantTransaction;
        if (merchantTransaction) {
            table = <MerchantTransactions transactionsData={merchants} />
        }
        else {
            let custumerDetails = customers.map((customer) => {
                let merchantName = merchants.filter(merchant => merchant.id === customer.merchantId)[0].name;
                return { name: customer.name, id: customer.id, merchantName: merchantName }
            })
            table = <Customers customersData={custumerDetails} />
        }
        return (<div className="container">
            <div className="btn-group" role="group" aria-label="Transactions">
                <button type="button" className="btn btn-light" onClick={this.displayMerchantDetails}>Merchant Transactions</button>
                <button type="button" className="btn btn-light" onClick={this.displayCustomers}>Customers</button>
            </div>
            {table}
        </div >)
    }
}

export default App