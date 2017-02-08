require('styles/chat-type.css');
import React from 'react';

const checkStr = (input)=> {
	let output = input;
	const lineMax = 120;
	if(input.length > lineMax) {
		output = input.slice(0, lineMax) + '\n' + input.slice(lineMax, input.length);
	}
	return output;
}

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

		this.props.updateChatList({role: 'you', text: checkStr(this.state.chatValue)});
		this.setState({chatValue: ''});
	}

	handleKeyUp(e) {
		if(e.key === 'Enter'){
			this.submitMsg();
		} else if(e.key === 'Escape') {
			this.setState({chatValue: ''});
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
    			<div className="typeButton">
	            	<button className="_clear" onClick={this.handleSubmit}>清除</button>
	            	<button className="_submit" onClick={this.handleSubmit}>送出</button>
    			</div>
      		</div>
        );
    }
}



ChatType.defaultProps = {};

export default ChatType;
