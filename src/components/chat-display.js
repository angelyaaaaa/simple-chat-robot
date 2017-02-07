require('styles/chat-display.css');
import React from 'react';
import ReactDOM from 'react-dom';
import ChatConv from './chat-conv';

class ChatDisplay extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}	
	
	scrollToBottom() {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
    	node.scrollIntoView({behavior: "smooth"});
	}

	componentDidMount() {
	    this.scrollToBottom();
	}

	componentDidUpdate() {
	    this.scrollToBottom();
	}

    render() {
        return (
            <div className="chat-display">
            	{this.props.chatDetail.map((item)=> {
        			return <ChatConv role={item.role} text={item.text} key={'chatConv_'+item.id}/>
            	})}
            	<div ref={(ref) => { this.messagesEnd = ref; }}></div>
      		</div>
        );
    }
}

ChatDisplay.defaultProps = {};

export default ChatDisplay;
