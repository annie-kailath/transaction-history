import React, { Component } from 'react';
import customers from './data/mockCustomers.json';
import merchants from './data/mockMerchants.json';
import Customers from './Customers';
import MerchantTransactions from './MerchantTransactions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            merchantTransaction: true,
            showMessage: true
        };
        this.displayMerchantDetails = this.displayMerchantDetails.bind(this);
        this.displayCustomers = this.displayCustomers.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }
    displayMerchantDetails() {
        this.setState(state => ({
            merchantTransaction: true,
            showMessage: true
        }));
    }
    displayCustomers() {
        this.setState(state => ({
            merchantTransaction: false,
            showMessage: false
        }));
    }

    showMessage(props) {
        this.setState({ showMessage: false })
    }

    render() {
        let table;
        let merchantTransaction = this.state.merchantTransaction;
        let viewTransactionMessage = "Please select 'View Transaction' to see the transactions for the company";
        if (merchantTransaction) {
            let merchantDetails = merchants.map(merchant => {
                let transactionList = merchant.transactions.map(transaction => {
                    let customer = customers.find(customer => transaction.customerId === customer.id).name;
                    return ({
                        id: transaction.id, amount: transaction.amount,
                        description: transaction.description, ccExpiry: transaction.ccExpiry, date: transaction.date, customerName: customer
                    })
                })
                return ({ id: merchant.id, name: merchant.name, isTrading: merchant.isTrading, currency: merchant.currency, transactions: transactionList })
            })
            table = <MerchantTransactions transactionsData={merchantDetails} setMessage={this.showMessage} />
        }
        else {
            let custumerDetails = customers.map((customer) => {
                let merchantName = merchants.find(merchant => merchant.id === customer.merchantId).name;
                return { name: customer.name, id: customer.id, merchantName: merchantName }
            })
            table = <Customers customersData={custumerDetails} />
        }
        return (<div className="container">
            {this.state.showMessage ? <ViewTransactionMessage message={viewTransactionMessage} /> : null}
            <div className="btn-group" role="group" aria-label="Transactions">
                <button type="button" className="btn btn-light" onClick={this.displayMerchantDetails}>Merchant Transactions</button>
                <button type="button" className="btn btn-light" onClick={this.displayCustomers}>Customers</button>
            </div>
            {table}
        </div >)
    }
}
const ViewTransactionMessage = ({ message }) => { return (<div className="alert alert-secondary" role="alert">{message}</div>) }
export default App