require('styles/chat-type.css');
import React from 'react';

class ChatType extends React.Component {
    render() {
        return (
            <div className="chat-type">
            	<textarea className="typeArea"></textarea>
            	<button className="typeSubmit">送出</button>
      		</div>
        );
    }
}

ChatType.defaultProps = {};

export default ChatType;
