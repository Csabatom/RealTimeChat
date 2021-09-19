import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

function TextField(props) {
    var [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isOwn: true
        });

        setInput('');
    };
    
    return (
        <div className="TextField w-100">
            <div className="mx-3 mb-3">
                <form className="input-group" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" value={input} onChange={handleChange} placeholder="Aa"></input>
                    <button className="btn btn-danger" onClick={() => {setInput(input += "😀")}} type="button">< HiOutlineEmojiHappy /></button>
                    <button className="btn btn-danger">< IoSend /></button>
                </form>
            </div>
        </div>
    )
}

export default TextField
