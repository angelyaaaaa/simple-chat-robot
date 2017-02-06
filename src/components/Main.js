require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ChatDisplay from './chat-display';
import ChatType from './chat-type';

class AppComponent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {};
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentWillMount() {
  // 		let body = {'stat': {'lo':'會議' },'in':'開.開開燈燈..'};
		// let myParam = {
		// 	method: 'POST',
		// 	'Content-Type': 'application/json',
		// 	body: body
		// };
		// fetch('http://demo3.crowdinsight.com.tw/schideron/v1/parse', myParam)
		// 	.then(response => response.json() )
		// 	.then(data => {
		// 		console.log('-----------------');
		// 		console.log(data);
		// });
	}

    render() {
        return (
            <div className="App">
            	<ChatDisplay/>
            	<ChatType/>
      		</div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
