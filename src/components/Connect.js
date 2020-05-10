import React from "react";

const Connect = () => {
    return (
        <div className="ui action input">
            <input type="text" placeholder="your name" />
            <button className="ui button primary">
                <i className="sign in alternate icon" />
                Connect
            </button>
        </div>
    );
};

export default Connect;
