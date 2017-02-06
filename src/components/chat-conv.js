require('styles/chat-conv.css');
import React from 'react';

class ChatConv extends React.Component {
    render() {
    	if(this.props.role === 'you') {
    		return(
    			<div className="chat-you conv">
	            	<div className="display-text">{this.props.text}</div>
	            	<img className="display-icon" src="../images/me.png" alt="me"/>
	            </div>  
    		);
    	} else {
    		return (
    			<div className="chat-others conv">
	            	<img className="display-icon" src="../images/robot.png" alt="robot"/>
	            	<div className="display-text">{this.props.text}</div>
	            </div>
    		);
    	}
    }
}

ChatConv.defaultProps = {};

export default ChatConv;
