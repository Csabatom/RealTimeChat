import React, { useEffect, useRef, useState } from 'react'
import ChatBubble from './ChatBubble'
import TextField from './TextField';
import io from 'socket.io-client'

function ChatPanel() {
    const [messages, setMessages] = useState([])
    const socketRef = useRef()

    const addMessage = message => {
        if(!message.text || /^\s*$/.test(message.text)) {
            return;
        }

        const newMessages = [...messages, message]
        socketRef.current.emit("message", { message })
        console.log(message, ...messages)
        setMessages(newMessages)
        window.scrollTo(0, document.documentElement.scrollHeight);
    }

    useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			socketRef.current.on("message", ({ message }) => {
                message.isOwn = false;
				const newMessages = [...messages, message]
                setMessages(newMessages)
                window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
			})
			return () => socketRef.current.disconnect()
		},
		[ messages ]
	)

    return (
        <div className="pb-5 mb-5">
            < ChatBubble messages={messages} />
            < TextField onSubmit={addMessage} />
        </div>
    )
}

export default ChatPanel
