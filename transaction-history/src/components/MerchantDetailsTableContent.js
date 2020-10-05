import React, { Component } from 'react';

class MerchantDetailsTableContent extends Component {
    render() {
        let rows = this.props.transactionsData.map((row, index) => {
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
}

export default MerchantDetailsTableContent
