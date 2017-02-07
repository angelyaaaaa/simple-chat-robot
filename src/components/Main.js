require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ChatDisplay from './chat-display';
import ChatType from './chat-type';

class AppComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			chatDetail: [
				{id: 1, role: 'others', text: 'chat-display'},
				{id: 2, role: 'you', text: 'chat-display1'},
				{id: 3, role: 'others', text: 'chat-display'},
				{id: 4, role: 'others', text: 'chat-display'},
				{id: 5, role: 'you', text: 'chat-display1'},
				{id: 6, role: 'others', text: 'chat-display'},
				{id: 7, role: 'you', text: 'chat-display1'},
				{id: 8, role: 'you', text: 'chat-display1'}
			],
			count: 8
		};
		this.updateChatDetail = this.updateChatDetail.bind(this);
	}

	componentWillMount() {
  		let body = {'stat': {'lo':'會議' },'in':'開.開開燈燈..'};
		let myParam = {
			// method: 'POST',
			method: 'OPTION',
			'Content-Type': 'application/json',
			body: body
		};
		// fetch('http://demo3.crowdinsight.com.tw/schideron/v1/parse', myParam)
		// 	.then(response => response.json() )
		// 	.then(data => {
		// 		console.log('-----------------');
		// 		console.log(data);
		// 	});
	}

	updateChatDetail(item) {
		let newChatDetail = this.state.chatDetail;
		let newCount = ++this.state.count;
		console.log(newCount);
		const tempChat = Object.assign({id:newCount}, item); 
		newChatDetail.push(tempChat);
		this.setState({chatDetail: newChatDetail, count: newCount});
	}

    render() {
        return (
            <div className="App">
            	<ChatDisplay chatDetail={this.state.chatDetail}/>
            	<ChatType updateChatDetail={this.updateChatDetail}/>
      		</div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
