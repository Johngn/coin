import React from "react";
import classNames from "classnames";

const Results = props => {
    const {
        investment,
        total,
        percent,
        winlose,
        winlose2,
    } = props.globalState.status;
    return (
        <div className="col-md-6">
            <h3>
                Your ${investment} investment {winlose}
            </h3>
            <h1
                className={classNames({
                    red: winlose === "lost",
                })}
            >
                ${total}
            </h1>
            <h4>
                {percent}% {winlose2}
            </h4>
        </div>
    );
};

export default Results;
