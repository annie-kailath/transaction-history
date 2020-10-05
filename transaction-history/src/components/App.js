import React, { Component } from 'react';
import customers from './data/mockCustomers.json';
import merchants from './data/mockMerchants.json';
import Customers from './Customers';

class App extends Component {
    render() {
        let custumerDetails = customers.map((customer) => {
            let merchantName = merchants.filter(merchant => merchant.id === customer.merchantId)[0].name;
            return { name: customer.name, id: customer.id, merchantName: merchantName }
        })
        let table = <Customers customersData={custumerDetails} />
        return (<div className="container">
            <div className="btn-group" role="group" aria-label="Transactions">
                <button type="button" className="btn btn-light" >Merchant Transactions</button>
                <button type="button" className="btn btn-light" >Customers</button>
            </div>
            {table}
        </div >)
    }
}

export default App