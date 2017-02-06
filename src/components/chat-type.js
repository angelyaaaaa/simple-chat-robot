require('styles/chat-type.css');
import React from 'react';

class ChatType extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {chatValue: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({chatValue: e.target.value});
	}

	handleSubmit(e) {
		this.props.updateChatDetail({role: 'you', text: this.state.chatValue});
		this.setState({chatValue: ''});
		console.log(this.state.chatValue)
	}


    render() {
        return (
            <div className="chat-type">
            	<textarea className="typeArea" placeholder="輸入訊息...." value={this.state.chatValue} onChange={this.handleChange}></textarea>
            	<button className="typeSubmit" onClick={this.handleSubmit}>送出</button>
      		</div>
        );
    }
}

ChatType.defaultProps = {};

export default ChatType;
