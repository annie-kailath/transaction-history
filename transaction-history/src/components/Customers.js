import React, { Component } from 'react';

const CustomerTableHeader = () => {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Merchant Name</th>
        </tr>
    </thead>)
}
const CustomerTableContent = (props) => {
    const rows = props.customersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.merchantName}</td>
            </tr>
        )
    })
    return (<tbody>{rows}</tbody>)
}
class Customers extends Component {
        render() {
        const {customersData} = this.props;
        return (
            <table className="table">
            <CustomerTableHeader />
            <CustomerTableContent customersData={customersData} />
        </table>
        )

    }
}

export default Customers;