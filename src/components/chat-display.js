require('styles/chat-display.css');
import React from 'react';
import ChatConv from './chat-conv';

class ChatDisplay extends React.Component {
    render() {
        return (
            <div className="chat-display">
            	{this.props.chatDetail.map((item)=> {
        			return <ChatConv role={item.role} text={item.text} key={'chatConv_'+item.id}/>
            	})}
      		</div>
        );
    }
}

ChatDisplay.defaultProps = {};

export default ChatDisplay;
