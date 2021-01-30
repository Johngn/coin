import React, { Component } from "react";
import axios from "axios";
import Home from "./components/Home";
import "./App.css";
import moment from "moment";

class App extends Component {
    constructor() {
        super();
        this.state = {
            date: moment(),
            cryptoAmount: 1,
            currency: "BTC",
            originalCurrency: "EUR",
            originalCurrencyFinal: "EUR",
            loading: false,
            priceToday: 0,
            investment: 0,
            percent: 0,
            total: 0,
        };
    }

    handleDateChange = date => {
        this.setState({
            date,
        });
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    apiCall = () => {
        this.setState({ loading: true });
        const { currency, date, originalCurrency } = this.state;

        axios
            .get(
                `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${currency}&tsyms=${currency},USD,EUR&ts=${moment().unix()}&extraParams=cryptocoin`
            )
            .then(res => {
                const currentPrice = res.data[currency][originalCurrency];

                axios
                    .get(
                        `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${currency}&tsyms=${currency},USD,EUR&ts=${date.unix()}&extraParams=cryptocoin`
                    )
                    .then(res => {
                        const oldPrice = res.data[currency][originalCurrency];

                        const profit = currentPrice - oldPrice;
                        this.setState({
                            originalCurrencyFinal: originalCurrency,
                            loading: false,
                            total: (profit * this.state.cryptoAmount).toFixed(
                                2
                            ),
                            investment: (
                                this.state.cryptoAmount * oldPrice
                            ).toFixed(2),
                            percent: ((profit / oldPrice) * 100).toFixed(2),
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="home container">
                <Home
                    changeHandler={this.changeHandler}
                    handleDateChange={this.handleDateChange}
                    globalState={this.state}
                    apiCall={this.apiCall}
                />
            </div>
        );
    }
}

export default App;
