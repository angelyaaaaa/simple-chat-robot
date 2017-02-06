require('styles/chat-display.css');
import React from 'react';
import ChatConv from './chat-conv';

class ChatDisplay extends React.Component {
    render() {
        return (
            <div className="chat-display">
            	<ChatConv role="others" text="chat-display"/>
            	<ChatConv role="you" text="chat-display1"/>
            	<ChatConv role="others" text="chat-display"/>
            	<ChatConv role="others" text="chat-display"/>
            	<ChatConv role="you" text="chat-display1"/>
            	<ChatConv role="others" text="chat-display"/>
            	<ChatConv role="you" text="chat-display1"/>
            	<ChatConv role="you" text="chat-display1"/>
            	
      		</div>
        );
    }
}

ChatDisplay.defaultProps = {};

export default ChatDisplay;
