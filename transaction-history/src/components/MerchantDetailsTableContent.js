import React, { Component } from 'react';

class MerchantDetailsTableContent extends Component {
    constructor(props) {
        super(props)
        this.sendCompanyName = this.sendCompanyName.bind(this);
    }

    sendCompanyName = (e) => {
        this.props.setCompanyName(e.currentTarget.title);
    }
    render() {
        let rows = this.props.transactionsData.map((row, index) => {
            return (
                <tr key={index} >
                    <td>{row.id}</td>
                    <td><button type="button" className="btn btn-link" title={row.name} onClick={this.sendCompanyName}>{row.name}</button></td>
                    <td>{row.isTrading ? 'Trading' : 'Not Trading'}</td>
                    <td>{row.currency}</td>
                </tr>
            )
        })
        return (<tbody>{rows}</tbody>)
    }
}

export default MerchantDetailsTableContent
