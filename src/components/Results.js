import React from "react";
import classNames from "classnames";

const Results = props => {
    const {
        investment,
        total,
        percent,
        originalCurrencyFinal,
    } = props.globalState;

    return (
        <div className="col-md-6 results">
            <h3>
                Your{" "}
                {originalCurrencyFinal === "USD" ? "$" : <span>&euro;</span>}
                {parseFloat(investment).toLocaleString("en", {
                    minimumFractionDigits: 2,
                })}{" "}
                investment {total > 0 ? "made" : "lost"}
            </h3>
            <h1
                className={classNames({
                    red: total < 0,
                })}
            >
                {originalCurrencyFinal === "USD" ? "$" : <span>&euro;</span>}
                {Number(total).toLocaleString("en", {
                    minimumFractionDigits: 2,
                })}
            </h1>
            <h4>
                which is a {percent}% {total > 0 ? "profit" : "loss"}
            </h4>
        </div>
    );
};

export default Results;
