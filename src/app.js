import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ClubItem from './components/ClubItem';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRb7pafnMnJL7XZcWTLPVe6xY5YEJbL0s",
    authDomain: "my-project-1503010099071.firebaseapp.com",
    databaseURL: "https://my-project-1503010099071.firebaseio.com",
    projectId: "my-project-1503010099071",
    storageBucket: "my-project-1503010099071.appspot.com",
    messagingSenderId: "524797115092"
  };
  firebase.initializeApp(config);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [{
				name:"Ryan Christiani",
				item:"Sour Cream"
			}],
			name: "",
			item: ""
		}
		this.addItem = this.addItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	addItem(e) {
		e.preventDefault();
		const usersItem ={
			item: this.state.item,
			name: this.state.name
		}
		this.setState({
			item: "",
			nae: ""
		})

		const dbRef = firebase.database().ref();
		dbRef.push(usersItem);
	}
	render() {
		
		return (
			<div>
				<Header />
				<section>
					<form onSubmit={this.addItem} className="addForm">
						<label htmlFor="item">Item: </label>
						<input type="text" name="item" onChange={this.handleChange}/>
						<label htmlFor="name">Name: </label>
						<input type="text" name="name" onChange={this.handleChange}/>
						<button>Add Item</button>
					</form>
					<ul className="items">
						{this.state.items.map((item,i) => {
							return <ClubItem data={item} key={i}/>
						})}
					</ul>
				</section>
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById('app'));