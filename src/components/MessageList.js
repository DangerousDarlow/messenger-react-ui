import React from "react";

const MessageList = () => {
    let messages = [];
    for (let i = 0; i < 10; i++) {
        messages.push({ id: i, text: `message ${i}` });
    }

    return messages.map((message) => (
        <div key={message.id}>{message.text}</div>
    ));
};

export default MessageList;
