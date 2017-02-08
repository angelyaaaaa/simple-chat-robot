require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ChatDisplay from './chat-display';
import ChatType from './chat-type';

class AppComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			chatList: [
				{id: 1, role: 'others', text: '你好，我是開燈機器人'},
				{id: 2, role: 'you', text: '安安你好給虧嗎?'},
				{id: 3, role: 'others', text: '我不懂你在說什麼'},
				{id: 4, role: 'others', text: '你好，我是開燈機器人'},
				{id: 5, role: 'you', text: '怎麼稱呼?'},
				{id: 6, role: 'others', text: '我是開燈機器人唷，專長是開燈'},
				{id: 7, role: 'you', text: '這樣阿'},
				{id: 8, role: 'you', text: '那我要下指令囉'}
			],
			count: 8
		};
		this.updateChatList = this.updateChatList.bind(this);
		this.respByRobot = this.respByRobot.bind(this);
	}


	componentWillMount() {}

	respByRobot(input) {
		let body = {'state': {'loc':'會議' },'inp': input};
		let myParam = {
	      	method: 'POST',
	      	headers: {
		        'Content-Type': 'application/json'
	      	},
	      	body: JSON.stringify(body)
	    };
		fetch('http://demo3.crowdinsight.com.tw/schideron/v1/parse', myParam)
			.then(response => response.json() )
			.then(data => {
				const newCount = ++this.state.count;
				let newChat = {id: newCount, role: 'others', text: '...'}
				const newChatList = this.state.chatList;
				newChatList.push(newChat);

				this.setState({chatList: newChatList, count: newCount});

				setTimeout(()=> {
					// console.log(this);
					// console.log(newCount);
					newChatList[newCount-1] = {id: newCount, role: 'others', text: data.text};
					this.setState({chatList: newChatList, count: newCount});
				}, 1000);
			});
	}

	updateChatList(item) {
		const newCount = ++this.state.count;
		const newChat = Object.assign({id:newCount}, item);
		const newChatList = this.state.chatList;
		newChatList.push(newChat);
		
		this.setState({chatList: newChatList, count: newCount});
		this.respByRobot(item.text);
	}

    render() {
        return (
            <div className="App">
            	<ChatDisplay chatList={this.state.chatList}/>
            	<ChatType updateChatList={this.updateChatList}/>
      		</div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
