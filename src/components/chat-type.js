require('styles/chat-type.css');
import React from 'react';

const checkStr = (input)=> {
	let output = input;
	const lineMax = 120;
	if(input.length > 120) {
		output = input.slice(0, 120) + '\n' + input.slice(120, input.length);		
	}
	console.log(output);
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

		this.props.updateChatDetail({role: 'you', text: checkStr(this.state.chatValue)});
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
            	<button className="typeSubmit" onClick={this.handleSubmit}>送出</button>
      		</div>
        );
    }
}



ChatType.defaultProps = {};

export default ChatType;
