import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Results from "./Results";
import Spinner from "./Spinner";

class Home extends Component {
    resultsDisplay = () => {
        return this.props.globalState.loading ? (
            <Spinner />
        ) : this.props.globalState.total === 0 ? (
            ""
        ) : (
            <Results globalState={this.props.globalState} />
        );
    };

    render() {
        return (
            <section className="">
                {/* <h4 className="main-heading">Bitcoin Tracker</h4> */}
                <div className="row">
                    <div className="col-md-6 left">
                        {/* <p id="instructions">
                            Enter the number of bitcoins bought and the date of
                            the transaction to find total profit or loss
                        </p> */}

                        <label>Cryptocurrency</label>
                        <select
                            name="currency"
                            className="currency-select"
                            onChange={this.props.changeHandler}
                            value={this.props.globalState.currency}
                        >
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="DOGE">Dogecoin</option>
                        </select>

                        <label>Bought with</label>
                        <select
                            name="originalCurrency"
                            className="currency-select"
                            onChange={this.props.changeHandler}
                            value={this.props.globalState.originalCurrency}
                        >
                            <option value="EUR">Euro</option>
                            <option value="USD">Dollars</option>
                        </select>

                        <label>Amount</label>
                        <input
                            className="currency-amount"
                            onChange={this.props.changeHandler}
                            value={this.props.globalState.cryptoAmount}
                            type="number"
                            name="cryptoAmount"
                        />
                        <label>Date</label>
                        <DatePicker
                            selected={this.props.globalState.date}
                            onChange={this.props.handleDateChange}
                        />
                        <button
                            onClick={this.props.apiCall}
                            className="btn"
                            type="submit"
                        >
                            Check
                        </button>
                    </div>
                    {this.resultsDisplay()}
                </div>
            </section>
        );
    }
}

export default Home;
