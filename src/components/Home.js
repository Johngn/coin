import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Results from "./Results";

class Home extends Component {
    resultsDisplay = () => {
        return this.props.globalState.status === "" ? (
            ""
        ) : (
            <Results globalState={this.props.globalState} />
        );
    };

    render() {
        return (
            <section className="">
                {/* <h2 className="main-heading">Bitcoin Tracker</h2> */}
                <div className="row">
                    <div className="col-md-6 left">
                        {/* <p id="instructions">
                            Enter the number of bitcoins bought and the date of
                            the transaction to find total profit or loss
                        </p> */}

                        <label>Amount of bitcoins bought</label>
                        <input
                            onChange={this.props.inputChangeHandler}
                            value={this.props.globalState.cryptoAmount}
                            type="number"
                            name="price"
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
