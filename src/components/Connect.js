import React from "react";

const Connect = () => {
    return (
        <div
            className="ui stackable center aligned grid"
            style={{ marginTop: 4, marginBottom: 4 }}
        >
            <div className="column twelve wide">
                <div className="ui action input">
                    <input type="text" placeholder="your name" />
                    <button className="ui button primary">
                        <i className="sign in alternate icon" />
                        Connect
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Connect;
