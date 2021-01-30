import React, { Component } from "react";

export default class Spinner extends Component {
    render() {
        return (
            <div className="col-md-6">
                {/* <img
                    className="spinner"
                    src={require("../images/spinner.gif")}
                    alt=""
                /> */}
                <div className="spinner-border" role="status">
                    <span>Loading...</span>
                </div>
            </div>
        );
    }
}
