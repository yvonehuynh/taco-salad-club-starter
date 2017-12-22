import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ClubItem from './components/ClubItem';

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