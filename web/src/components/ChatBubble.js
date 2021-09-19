import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function ChatBubble({messages}) {
    return messages.map((message, index) => (
        <div className={message.isOwn ? "col-sm-12 d-flex justify-content-end" : ""} key={index}>
            <div className="ChatBubble-bg bg-danger col-sm-8 mt-5 mx-3 p-3 pb-1" style={{boxShadow: message.isOwn ? "10px 10px 5px #dedede" : "-10px 10px 5px #dedede"}}>
                <p>{message.text}</p>
            </div>
        </div>
    ))
}

export default ChatBubble
