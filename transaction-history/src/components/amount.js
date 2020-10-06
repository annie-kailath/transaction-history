import React, { Component } from 'react';

const Amount = (props) => {
    let formattedAmount = (props.amount / 100).toFixed(2);
    switch (props.currency) {

        case 'AUD':
            formattedAmount = ('$' + formattedAmount);
            break;
        case 'EURO':
            formattedAmount = ('£' + formattedAmount);
            break;
    }
    return (<div>{formattedAmount}</div>)
}

export default Amount
