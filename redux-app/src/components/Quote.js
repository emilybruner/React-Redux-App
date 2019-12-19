import React from 'react'
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import './Quote.styles.scss';

import {getQuote} from '../actions/index';

const Quote = props => {
    return (
        <div className='container'>
            <h1> The Book of Yandhi</h1>
            {!props.quote && !props.isFetching}
            {props.isFetching && (
                <Loader type='Puff' color="#00BFFF" height={100} width={100} />
            )}
            <div className='quote'>
            {props.quote && <p>{props.quote}</p>}
            </div>
            
            <button onClick={props.getQuote}>Get Quote</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getQuote}
)(Quote);