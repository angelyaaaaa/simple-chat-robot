require('styles/chat-type.css');
import React from 'react';

class ChatType extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {chatValue: ''};
		this.handleChange = this.handleChange.bind(this);
		this.submitMsg = this.submitMsg.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleChange(e) {
		this.setState({chatValue: e.target.value});
	}

	submitMsg() {
		this.props.updateChatDetail({role: 'you', text: this.state.chatValue});
		this.setState({chatValue: ''});
	}

	handleKeyUp(e) {
		// console.log(e);
		console.log(e.key);
		// window.xxx = e.persist();
		// if(e.)
		if(e.key === 'Enter'){
			this.submitMsg();
		}
	}


	handleSubmit(e) {
		this.submitMsg();
	}


    render() {
        return (
            <div className="chat-type">
            	<textarea className="typeArea" placeholder="輸入訊息...." 
            			value={this.state.chatValue} 
            			onChange={this.handleChange}
            			onKeyUp={this.handleKeyUp}
            			></textarea>
            	<button className="typeSubmit" onClick={this.handleSubmit}>送出</button>
      		</div>
        );
    }
}

ChatType.defaultProps = {};

export default ChatType;
