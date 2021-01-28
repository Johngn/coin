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
            data: "",
            btcToday: "",
            ethToday: "",
            cryptoAmount: 1,
            status: "",
            symbols: [],
            currency: "BTC",
            loading: true,
        };
    }

    handleDateChange = date => {
        this.setState({
            date: date,
        });
    };

    inputChangeHandler = e => {
        this.setState({
            cryptoAmount: e.target.value,
        });
    };

    selectChangeHandler = e => {
        this.setState({
            currency: e.target.value,
        });
    };

    componentWillMount = () => {
        axios
            .get(
                `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${moment().unix()}&extraParams=cryptocoin`
            )
            .then(response => {
                this.setState({
                    btcToday: response.data.BTC.USD,
                });
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .get(
                `https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=ETH,USD,EUR&ts=${moment().unix()}&extraParams=cryptocoin`
            )
            .then(response => {
                this.setState({
                    ethToday: response.data.ETH.USD,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    apiCall = () => {
        this.setState({ loading: true });

        axios
            .get(
                `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${
                    this.state.currency
                }&tsyms=${
                    this.state.currency
                },USD,EUR&ts=${this.state.date.unix()}&extraParams=cryptocoin`
            )
            .then(response => {
                let CP = "";
                let SP = "";
                if (response.data.BTC) {
                    CP = response.data.BTC.USD;
                    SP = this.state.btcToday;
                } else if (response.data.ETH) {
                    CP = response.data.ETH.USD;
                    SP = this.state.ethToday;
                }

                if (CP < SP) {
                    let profit = SP - CP;
                    let percentProfit = (profit / CP) * 100;
                    percentProfit = percentProfit.toFixed(2);
                    let totalProfit = (
                        profit * this.state.cryptoAmount
                    ).toFixed(2);
                    let investment = this.state.cryptoAmount * CP;
                    this.setState({
                        location: "results",
                        loading: false,
                        status: {
                            total: totalProfit,
                            investment: investment,
                            percent: percentProfit,
                            winlose: "made",
                            winlose2: "profit",
                        },
                    });
                } else {
                    let loss = CP - SP;
                    let percentLoss = (loss / CP) * 100;
                    percentLoss = percentLoss.toFixed(2);
                    let totalLoss = (loss * this.state.cryptoAmount).toFixed(2);
                    let investment = this.state.cryptoAmount * CP;
                    this.setState({
                        location: "results",
                        loading: false,
                        status: {
                            total: totalLoss,
                            investment: investment,
                            percent: percentLoss,
                            winlose: "lost",
                            winlose2: "loss",
                        },
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="home container">
                <Home
                    selectChangeHandler={this.selectChangeHandler}
                    handleDateChange={this.handleDateChange}
                    globalState={this.state}
                    inputChangeHandler={this.inputChangeHandler}
                    apiCall={this.apiCall}
                />
            </div>
        );
    }
}

export default App;
