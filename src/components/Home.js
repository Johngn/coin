import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class Home extends Component {
  render() {
    const { investment, total, percent, winlose, winlose2 } = this.props.globalState.status
    return (
      <section className="">
      <div className="row">
      <div className="ads"></div>
        <div className="col-md-6 left">
        <h2 id="instructions">Enter the number of bitcoins bought and the date of the transaction to find total profit or loss</h2>
          <label>Price</label>
          <input onChange={this.props.inputChangeHandler} value={this.props.globalState.cryptoAmount} type="number" name="price"/>
          <label>Date</label>
          <DatePicker 
            selected={this.props.globalState.date}
            onChange={this.props.handleDateChange} 
          />
          <button onClick={this.props.apiCall} className="btn" type="submit">Check</button>
        </div>
        <div className="col-md-6">
        <h3>Your ${investment} investment {winlose}</h3>
          <h1 className="">${total}</h1>
          <h4>{percent}% {winlose2}</h4>
        </div>
        <div className="ads"></div>
        </div>
      </section>
    );
  }
}

export default Home;
